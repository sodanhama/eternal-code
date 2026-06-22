import { Hono } from 'hono'
import { streamSSE } from 'hono/streaming'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { streamText as aiStreamText } from 'ai'
import { db } from "@eternalcode/database/client"
import { Mode, MessageStatus } from "@eternalcode/database/enums"
import { type ChatStreamEvent } from "@eternalcode/shared"
import { isSupportedChatModel, resolveChatModel } from "../lib/models"

const submitSchema = z.object({
    content: z.string(),
    mode: z.enum(Mode),
    model: z.string().refine(isSupportedChatModel, "Unsupported model")
})

const submitValidator = zValidator("json", submitSchema, (result, c) => {
    if (!result.success) {
        return c.json({error: "Invalid request body"}, 400);
    }
})

function buildConversationHistory(
    messages: {role: "USER" | "ASSISTANT" | "ERROR"; content: string; status: MessageStatus}[]
) {
    return messages.flatMap((m) => {
        if (m.role === "ERROR") return [];
        if (m.role === "ASSISTANT" && m.content.length === 0) return []
        return [
            {role: m.role === "USER" ? ("user" as const): ("assistant" as const), content: m.content}
        ]
    })
}

type StreamParams = {
    sessionId: string;
    model: string;
    history: { role: "user" | "assistant"; content: string} [];
    mode: Mode;
    abortController: AbortController;
}

async function streamAIResponse(
    stream: Parameters<Parameters<typeof streamSSE>[1]>[0],
    params: StreamParams
) {
    const { sessionId, model, history, mode, abortController} = params;
    const startTime = Date.now();
    const resolvedModel = resolveChatModel(model);
    let fullText = "";
    try {
        const result = aiStreamText({
            model: resolvedModel.model,
            messages: history,
            abortSignal: abortController.signal,
            
        })

        for await (const part of result.fullStream) {
            if (stream.aborted) break;

            if (part.type === "text-delta") {
                fullText += part.text;
                const event: ChatStreamEvent = {type: "text-delta", text: part.text};
                await stream.writeSSE({event: "text-delta", data: JSON.stringify(event)});
            }

            if (part.type === "error") {
                throw part.error;
            }

            if (stream.aborted || abortController.signal.aborted) {
                return;
            }

            const elapsedMs = Date.now() - startTime;

            const assistantMessage = await db.message.create({
                data: {
                    sessionId,
                    role: "ASSISTANT",
                    status: MessageStatus.COMPLETE,
                    model,
                    content: fullText,
                    mode,
                    duration: Math.round(elapsedMs / 1000)
                }
            })
    
    
    const doneEvent: ChatStreamEvent = {
        type: "done",
        messageId: assistantMessage.id,
        durationMs: elapsedMs,
    }
        }

    await stream.writeSSE({event: "done", data: JSON.stringify(doneEvent)})
    } catch (err) {}
}