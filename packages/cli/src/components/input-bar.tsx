import type { KeyBinding } from "@opentui/core";
import { StatusBar } from "./status-bar";
import { CommandMenu } from "./command-menu";

type Props = {
    onSubmit: (text: string) => void;
    disabled?: boolean;
}

export const TEXTAREA_KEY_BINDINGS: KeyBinding[] = [
    {name : "return", action: "submit"},
    {name : "enter", action: "submit"},
    {name : "return", shift: true, action: "newline"},
    {name : "enter", shift: true, action: "newline"},
]

export function InputBar({ onSubmit, disabled }: Props) {
    return (
        <box width="100%" alignItems="center">
            <box
            border={["left"]}
            borderColor="#1a759f"
            >
                <box
                position="relative"
                justifyContent="center"
                paddingX={2}
                paddingY={1}
                backgroundColor="#1b263b"
                width="100%"
                gap={1}>
                    {true && (
                        <box
                        position="absolute"
                        bottom="100%"
                        left={0}
                        width="100%"
                        backgroundColor="#1b263b"
                        zIndex={10}
                        >
                            <CommandMenu
                                query=""
                            />
                        </box>
                    )}

                    <textarea
                    focused={!disabled}
                    keyBindings={TEXTAREA_KEY_BINDINGS}
                    placeholder= {`Ask anything...`}
                    />
                    <StatusBar/>
                </box>
            </box>
        </box>
    );
}