import { useState } from "react";

export const UndefinedExample = () => {
    const [obj] = useState<{ prop?: string }>({})
    return (
        <div>
            <h2>Undefined Example</h2>
            <p>Accessing a property of an undefined object will throw an error.</p>
            <p>Object property: {obj.prop}</p>
        </div>
    )
}