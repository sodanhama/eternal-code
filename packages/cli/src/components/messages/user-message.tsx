type Props = {
    message: string;
}

export function UserMessage({ message }: Props) {
    return (
        <box width="100%" alignItems="center">
            <box 
                border={["left"]}
                borderColor="white"
                width="100%"
            >
                <box
                    justifyContent="center"
                    paddingX={2}
                    paddingY={1}
                    backgroundColor="#1b263b"
                    width="100%"
                >
                    <text>
                        {message}
                    </text>
                </box>
            </box>
        </box>
    )
}