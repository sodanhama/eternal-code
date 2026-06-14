import { Outlet } from "react-router";
import { ToastProvider } from "../providers/toast";
import { DialogProvider } from "../providers/dialog";
import { KeyboardLayerProvider } from "../providers/keyboard-layer";
import { Root } from "./root";

export function RootLayout() {
  return (
    <ToastProvider>
      <KeyboardLayerProvider>
        <DialogProvider>
          <Root>
            <Outlet />
          </Root>
        </DialogProvider>
      </KeyboardLayerProvider>
    </ToastProvider>
  );
}