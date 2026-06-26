import { hackclub } from "./hackclub-provider";
import {
  findSupportedChatModel,
  type SupportedChatModelId,
} from "@eternalcode/shared";
import type { LanguageModel } from "ai";

export type ResolvedModel = {
  model: LanguageModel;
  modelId: SupportedChatModelId;
};

export function isSupportedChatModel(modelId: string): modelId is SupportedChatModelId {
  return findSupportedChatModel(modelId) != null;
}

export function resolveChatModel(modelId: string): ResolvedModel {
  const found = findSupportedChatModel(modelId);
  if (!found) {
    throw new Error(`Unsupported model ID: ${modelId}`);
  }
  return {
    model: hackclub.chat(found.id),
    modelId: found.id,
  };
}