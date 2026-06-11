import type { Command } from "./types";

export const COMMANDS: Command[] = [
    {
        name: "new",
        description: "Create a new conversation",
        value: "/new",
        action: (ctx) => {
            ctx.toast.show({message: "Starting a new conversation..."});
        }
    },
    {
        name: "agents",
        description: "Switch agents",
        value: "/agents",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Select Mode",
                children: <text>Agent selection under development...</text>
            })
        }
    },
    {
        name: "models",
        description: "Switch models",
        value: "/models",
        action: (ctx) => {
            ctx.toast.show({message: "Switching models..."});
        }
    },
    {
        name: "sessions",
        description: "Browse past sessions",
        value: "/sessions",
        action: (ctx) => {
            ctx.toast.show({message: "Loading sessions..."});
        }
    },
    {
        name: "theme",
        description: "Change color theme",
        value: "/theme",
        action: (ctx) => {
            ctx.toast.show({message: "Opening theme picker..."});
        }
    },
    {
        name: "login",
        description: "Login to your account",
        value: "/login",
        action: (ctx) => {
            ctx.toast.show({message: "Opening browser to authenticate..."});
        }
    },
    {
        name: "logout",
        description: "Logout of your account",
        value: "/logout",
        action: (ctx) => {
            ctx.toast.show({message: "Logged out", variant:"success"});
        }
    },
    {
        name: "upgrade",
        description: "Buy more credits",
        value: "/upgrade",
        action: (ctx) => {
            ctx.toast.show({message: "Opening browser to upgrade..."});
        }
    },
    {
        name: "usage",
        description: "View your usage and remaining credits",
        value: "/usage",
        action: (ctx) => {
            ctx.toast.show({message: "Fetching usage data..."});
        }
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