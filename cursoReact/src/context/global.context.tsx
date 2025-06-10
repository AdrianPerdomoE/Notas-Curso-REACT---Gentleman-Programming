import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";


interface GlobalProviderProps {
    children: ReactNode;
}
export interface GlobalContextType {
    value?: boolean;
    setValue: Dispatch<SetStateAction<boolean | undefined>>;
}
export const EmptyGlobalState: boolean | undefined = undefined;
export const initialGlobalState: boolean = false;
export const EmptyGlobalContext: GlobalContextType = {
    value: EmptyGlobalState,
    setValue: () => { }
};

export const GlobalContext = createContext<GlobalContextType>(EmptyGlobalContext);


export const UseGlobalContext = (): GlobalContextType => {
    const context: GlobalContextType = useContext(GlobalContext);
    if (context.value === undefined) {
        throw new Error("UseGlobalContext must be used within a GlobalProvider");
    }
    return context;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [value, setValue] = useState<boolean | undefined>(initialGlobalState);

    return (
        <GlobalContext.Provider value={{ value, setValue }}>
            {children}
        </GlobalContext.Provider>
    );
}
