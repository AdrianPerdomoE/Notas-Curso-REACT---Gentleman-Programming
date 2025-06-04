import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    title: string;
    parentMethod?: () => void;
}

export const Child = ({ children }: Pick<Props, "children">) => {
    return (

        <div style={{ color: 'blue', border: '1px solid black', padding: '10px' }}>
            {children}
        </div>
    );
}

export const Parent = ({ children, title, parentMethod }: Props) => {
    return (
        <>
            <h1>{title}</h1>
            <button onClick={parentMethod} >
                {children}
            </button>
        </>

    );
}