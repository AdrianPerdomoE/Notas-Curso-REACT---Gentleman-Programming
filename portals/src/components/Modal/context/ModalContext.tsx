import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";


const ModalContext = createContext<ModalContextType>({ state: false, setState: () => null });

interface ModalContextType { state: boolean, setState: Dispatch<SetStateAction<boolean>> };
const ModalProvider = ({ children }: { children: ReactNode }) => {

    const [state, setState] = useState<boolean>(false);

    return (
        <ModalContext.Provider value={{ state, setState }}>
            {children}
        </ModalContext.Provider>
    );
};

export { ModalContext, ModalProvider, type ModalContextType };