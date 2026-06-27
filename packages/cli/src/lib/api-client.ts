import { hc } from "hono/client";
import type { AppType } from "@eternalcode/server";

declare const API_URL: string;

export const apiClient = hc<AppType>(
    typeof API_URL !== "undefined" ? API_URL : "http://localhost:3000"
)