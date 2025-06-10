// ejemplo de uso de useRef para enfocar un input o un elemento del DOM

import { useRef } from "react";

export const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        if (!inputRef.current) {
            console.error("Input reference is not set.");
            return;
        }
        inputRef.current.focus();
        console.log("Input focused");
    }

    return (
        <>
            <h2>Enfocar Input con useRef</h2>
            <input type="text" ref={inputRef} placeholder="Escribe algo aquí..." />
            <button onClick={handleButtonClick}>Enfocar Input</button>
        </>
    );
}