import { useEffect } from "react"


export const EffectExample = () => {
    useEffect(() => {
        // Simulate a side effect that might throw an error
        throw new Error("Simulated error in useEffect")
    }, [])
    return (
        <div>
            <h2>Effect Example</h2>
            <p>This component simulates an error in useEffect.</p>
        </div>
    )
}