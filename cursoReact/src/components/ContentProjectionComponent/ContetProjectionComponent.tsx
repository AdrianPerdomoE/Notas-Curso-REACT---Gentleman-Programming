import type { ReactNode } from "react";

interface Props {
    children: ReactNode;
    title: string;
}

export const Children = ({ children }: Pick<Props, "children">) => {
    return (
        { children }
    );
}

export const Parent = ({ children, title }: Props) => {
    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    );
}