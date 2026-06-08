import { TextAttributes } from "@opentui/core";

export function StatusBar() {
    return (
        <box flexDirection="row" gap={1}>
            <text fg="#a8dadc">Build</text>
            <text attributes={TextAttributes.DIM} fg="#5e548e">
                &rsaquo;
            </text>
            <text>opus-4-6</text>
        </box>  
    )
}  