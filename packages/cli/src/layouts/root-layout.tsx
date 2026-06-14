import { Outlet } from "react-router";
import { ToastProvider } from "../providers/toast";
import { KeyboardLayerProvider } from "../providers/keyboard-layer";
import { DialogProvider } from "../providers/dialog";
import { Root } from "./root";

export function RootLayout() {
    return(
        <ToastProvider>
        <DialogProvider>
        <KeyboardLayerProvider>
            <Root>
                <Outlet />
            </Root>
        </KeyboardLayerProvider>
        </DialogProvider>
        </ToastProvider>
    )
}