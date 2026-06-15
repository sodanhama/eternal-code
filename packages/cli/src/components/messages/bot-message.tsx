type Props = {
    content: string;
    model: string;
}

export function BotMessage({ content, model }: Props) {
    return (
        <box width="100%" alignItems="center">
            <box paddingY={1} width="100%">
                <box paddingX={3} width="100%">
                    <text>
                        {content}
                    </text>
                </box>
            </box>
            <box paddingX={3} paddingBottom={1} gap={1} width="100%">
                <box flexDirection="row" width="100%">
                    <text fg="lightgray">◉</text>
                    <text>
                        {model}
                    </text>
                </box>
            </box>
        </box>
    )
}