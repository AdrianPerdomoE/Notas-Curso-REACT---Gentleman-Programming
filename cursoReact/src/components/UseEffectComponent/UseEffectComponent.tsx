import { useCallback, useEffect, useState } from "react";

export const UseEffectComponent = () => {
    const [data, setData] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    // Cuando queremos obtener datos de una API, tenemo que comunicarnos con un endpoint - una entidad externa al componente
    const consoleLoader = useCallback((loadingValue: boolean) => {
        setLoading(loadingValue);
        console.log("Loading state changed:", loadingValue);
    },
        []
    );
    // fake api fetch
    const fetchData = useCallback(async () => {
        consoleLoader(true);
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const json = await response.json();
            if (!response.ok) {
                throw new Error("Error en la respuesta de la API");
            }
            setData(json);
        }
        catch (error) {
            setError("Error al cargar los datos");
            console.log(error);
        }
        finally {
            consoleLoader(false);
        }
    }, [consoleLoader]);
    useEffect(() => {
        console.log("useEffect");

        fetchData();

        return () => {
            console.log("cleanup");
        }
    }, [fetchData]);

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>);
    }
    if (error) {
        return (
            <div>
                <h1>{error}</h1>
            </div>);
    }
    return (
        <div>
            {JSON.stringify(data)}
        </div>);

}