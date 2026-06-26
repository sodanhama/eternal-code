export type ModelPricing = {
    inputUsdPerMillionTokens: number;
    outputUsdPerMillionTokens: number;
}

export type SupportedProvider = "hackclub";

type SupportedChatModelDefinition = {
    id: string;
    provider: SupportedProvider;
    pricing: ModelPricing;
}

// Models allowed by Hack Club's AI proxy (https://ai.hackclub.com/proxy/v1).
// Source: https://github.com/hackclub/ai (ALLOWED_LANGUAGE_MODELS env var)
// Pricing is 0 since these are free to you via Hack Club's proxy.
// Re-check this list periodically — Hack Club can add/remove models without notice.
export const SUPPORTED_CHAT_MODELS = [
    {
        id: "qwen/qwen3-32b",
        provider: "hackclub",
        pricing: { inputUsdPerMillionTokens: 0, outputUsdPerMillionTokens: 0 }
    },
    {
        id: "moonshotai/kimi-k2-thinking",
        provider: "hackclub",
        pricing: { inputUsdPerMillionTokens: 0, outputUsdPerMillionTokens: 0 }
    },
    {
        id: "x-ai/grok-build-0.1",
        provider: "hackclub",
        pricing: { inputUsdPerMillionTokens: 0, outputUsdPerMillionTokens: 0 }
    },
    {
        id: "moonshotai/kimi-k2-0905",
        provider: "hackclub",
        pricing: { inputUsdPerMillionTokens: 0, outputUsdPerMillionTokens: 0 }
    },
    {
        id: "qwen/qwen3-vl-235b-a22b-instruct",
        provider: "hackclub",
        pricing: { inputUsdPerMillionTokens: 0, outputUsdPerMillionTokens: 0 }
    },
    {
        id: "nvidia/nemotron-nano-12b-v2-vl",
        provider: "hackclub",
        pricing: { inputUsdPerMillionTokens: 0, outputUsdPerMillionTokens: 0 }
    },
    {
        id: "google/gemini-2.5-flash",
        provider: "hackclub",
        pricing: { inputUsdPerMillionTokens: 0, outputUsdPerMillionTokens: 0 }
    },
    {
        id: "openai/gpt-5-mini",
        provider: "hackclub",
        pricing: { inputUsdPerMillionTokens: 0, outputUsdPerMillionTokens: 0 }
    },
    {
        id: "deepseek/deepseek-v3.2-exp",
        provider: "hackclub",
        pricing: { inputUsdPerMillionTokens: 0, outputUsdPerMillionTokens: 0 }
    },
    {
        id: "deepseek/deepseek-r1-0528",
        provider: "hackclub",
        pricing: { inputUsdPerMillionTokens: 0, outputUsdPerMillionTokens: 0 }
    },
    {
        id: "z-ai/glm-4.6",
        provider: "hackclub",
        pricing: { inputUsdPerMillionTokens: 0, outputUsdPerMillionTokens: 0 }
    },
] as const satisfies readonly SupportedChatModelDefinition[];

export type SupportedChatModel = (typeof SUPPORTED_CHAT_MODELS)[number];
export type SupportedChatModelId = SupportedChatModel["id"];

export function findSupportedChatModel(modelId: string) {
    return SUPPORTED_CHAT_MODELS.find((model) => model.id === modelId);
}

export const DEFAULT_CHAT_MODEL_ID: SupportedChatModelId = "x-ai/grok-build-0.1";