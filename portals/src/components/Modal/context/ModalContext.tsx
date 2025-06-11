import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";


export interface ModalContextType { state: boolean, setState: Dispatch<SetStateAction<boolean>> };

const ModalContext = createContext<ModalContextType>({ state: false, setState: () => null });

export const ModalProvider = ({ children }: { children: ReactNode }) => {

    const [state, setState] = useState<boolean>(false);

    return (
        <ModalContext.Provider value={{ state, setState }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModalContext = (): ModalContextType => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("UseModalContext must be used within a ModalProvider");
    }
    return context;

}