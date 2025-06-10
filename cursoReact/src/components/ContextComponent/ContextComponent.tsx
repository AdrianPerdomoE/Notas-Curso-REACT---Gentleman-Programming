import { UseGlobalContext } from "../../context";


export const ContextComponent = () => {
    const { value: contextValue, setValue: setContextValue } = UseGlobalContext();

    return (
        <div>
            <h2>Context Component</h2>
            <p>Context Value: {contextValue ? "True" : "False"}</p>
            <button onClick={() => setContextValue(!contextValue)}>
                Toggle Context Value
            </button>
        </div>
    );
}