import { Mode } from "@eternalcode/database/enums"
import type { ClientMessagePart } from "../../hooks/use-chat"
import { TextAttributes } from "@opentui/core"

type Props = {
    parts: ClientMessagePart[];
    model: string;
    mode: Mode;
    duration?: string;
    streaming?: boolean;
    interrupted?: boolean;
}

export function BotMessage({ parts, model, mode, duration, streaming = false, interrupted = false }: Props) {
    const text = parts
    .filter((p) => p.type === "text")
    .map((p) => p.text)
    .join("")

    return (
        <box width="100%" alignItems="center">
            <box paddingY={1} width="100%">
                <box paddingX={3} width="100%">
                    <text>
                        {text}
                    </text>
                </box>
            </box>
            <box paddingX={3} paddingBottom={1} gap={1} width="100%">
                <box flexDirection="row" width="100%">
                    <text
                        attributes={interrupted ? TextAttributes.DIM : 0}
                        fg={interrupted ? undefined : mode === Mode.PLAN ? "#F5A623" : "#7ED321"}
                    >
                        ◉
                    </text>
                    <box flexDirection="row" gap={1}>
                        <text
                            attributes={interrupted ? TextAttributes.DIM : 0}
                        >
                            {mode === Mode.PLAN ? "plan" : "execute"}
                        </text>
                        <text attributes={TextAttributes.DIM} fg="#292626"> › </text>
                        <text attributes={TextAttributes.DIM}>{model}</text>
                        {(duration || interrupted) && (
                            <>
                            <text attributes={TextAttributes.DIM} fg="#292626"> › </text>
                            <text attributes={TextAttributes.DIM}>{duration}</text>
                            </>
                        )}
                    </box>
                </box>
            </box>
        </box>
    )
}