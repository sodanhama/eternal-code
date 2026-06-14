import type { ReactNode } from "react";

type Props = {
    children?: ReactNode
}

export function Root({children}: Props) {
  return(
    <box
        backgroundColor="#171A21"
        width="100%"
        height="100%"
        flexGrow={1}
    >
        {children}
    </box>
  )
}