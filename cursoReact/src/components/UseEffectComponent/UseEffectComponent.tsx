import { use, useEffect, useState } from "react";

export const UseEffectComponent = () => {
    const [data, setData] = useState<string[]>([]);
    // Cuando queremos obtener datos de una API, tenemo que comunicarnos con un endpoint - una entidad externa al componente

    // fake api fetch
    const fetchData = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const json = await response.json();
            setData(json);
        }
        catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        console.log("useEffect");

        fetchData();

        return () => {
            console.log("cleanup");
        }
    }, []);

    return (
        <div>
            {JSON.stringify(data)}
        </div>);

}