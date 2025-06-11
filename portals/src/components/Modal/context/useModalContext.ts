import { useContext } from "react";
import { type ModalContextType, ModalContext } from "./ModalContext";

export const useModalContext = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("UseModalContext must be used within a ModalProvider");
    }
    return context;

}
