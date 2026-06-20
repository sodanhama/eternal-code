import { Hono } from "hono";
import { sentry } from "@sentry/hono/bun";
import * as Sentry from "@sentry/hono/bun"
import { HTTPException } from "hono/http-exception";
import sessions from "./routes/sessions";

const app = new Hono();

app.use(
  sentry(app, {
    dsn: "https://10894c72dc40807cbc2a49bfc291b18b@o4511597329055744.ingest.de.sentry.io/4511597338099792",
    tracesSampleRate: 1.0,
    enableLogs: true,
    dataCollection: {
    },
  }),
);

app.get("/debug-sentry", () => {
  // Send a log before throwing the error
  Sentry.logger.info('User triggered test error', {
    action: 'test_error_endpoint',
  });
  // Send a test metric before throwing the error
  Sentry.metrics.count('test_counter', 1);
  throw new Error("My first Sentry error!");
});

app.onError((error,c)=>{
    if (error instanceof HTTPException){
        return c.json({
            error: error.message || "Request failed"},
        error.status)
    }

    console.error("Unhandled server error", error);

    return c.json({
        error: "Internal Server Error"
    }, 500)
})

const routes = app.route("/sessions", sessions);

export type AppType = typeof routes;

export default {port: 3000, fetch: app.fetch, idleTimeout: 255};
