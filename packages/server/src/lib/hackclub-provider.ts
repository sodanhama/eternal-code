import { createOpenAI } from "@ai-sdk/openai";


export const hackclub = createOpenAI({
  apiKey: process.env.HACKCLUB_API_KEY,
  baseURL: "https://ai.hackclub.com/proxy/v1",
});