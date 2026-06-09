import type { Command } from "./types";

export const COMMANDS: Command[] = [
    {
        name: "new",
        description: "Create a new conversation",
        value: "/new"
    },
    {
        name: "agents",
        description: "Switch agents",
        value: "/agents"    
    },
    {
        name: "models",
        description: "Switch models",
        value: "/models"
    },
    {
        name: "sessions",
        description: "Browse past sessions",
        value: "/sessions"
    },
    {
        name: "theme",
        description: "Change color theme",
        value: "/theme"
    },
    {
        name: "login",
        description: "Login to your account",
        value: "/login"
    },
    {
        name: "logout",
        description: "Logout of your account",
        value: "/logout"
    },
    {
        name: "upgrade",
        description: "Buy more credits",
        value: "/upgrade"
    },
    {
        name: "usage",
        description: "View your usage and remaining credits",
        value: "/usage"
    },
    {
        name: "exit",
        description: "Exit the application",
        value: "/exit",
        action: (ctx) => {
            ctx.exit();
        }
    }
]