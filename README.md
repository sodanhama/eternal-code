# EternalCode
## Description
This is a terminal based AI chat client I built with OpenTUI, powered by free models from HackClub AI, serving as a learning project as I have very little experience in building full stack apps, and the final hosting and building releases proved quite challenging to me.

This is a fully robust release, however, I will be adding crucial features such as tool calling and session managent and client side tool execution soon, as I hope to make a clone of Claude Code, with the majority of design inspiration from OpenCode.

I took the help of youtube tutorials and AI - only to point out errors and learn to solve them, to build this project.

![Screenshot](https://cdn.hackclub.com/019f0718-cb0a-77d1-a74e-b90f9afd32de/Screenshot%202026-06-27%20at%208.51.23â%C2%80¯AM.png)

## Download

Download here: https://github.com/sodanhama/eternal-code/releases/tag/v1.0.1

| Platform | Arch | File | Tested personally |
| --- | --- | --- | --- | --- |
| macOS | Apple Silicon (arm64) | `eternalcode-macos-arm64.zip` | ✅ |
| Linux | x64 | `eternalcode-linux-x64.zip` | ❌ |
| Windows | x64 | `eternalcode-windows-x64.zip` | ❌ |

### Running a downloaded build
 
```bash
# macOS / Linux
unzip eternalcode-<platform>.zip --- i did not need for macOS as finder does this automatically
xattr -cr eternalcode
chmod +x eternalcode --- i did not need for macOS 
./eternalcode
 
# Windows
# unzip, then double-click eternalcode.exe or run it from a terminal
```

## Tech stack
Bun — runtime, package manager, bundler (monorepo workspaces)
TypeScript — throughout
OpenTUI + React — terminal UI
react-router, Zod — navigation, validation
Hono — backend API, with type-safe RPC client
Vercel AI SDK — LLM streaming via Hack Club's AI proxy
Prisma 7 + PostgreSQL — database
Sentry — error tracking
Railway — hosting
GitHub Actions — CI, cross-platform release builds
