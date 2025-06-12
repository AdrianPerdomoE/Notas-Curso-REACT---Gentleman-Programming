import { useEffect, useState } from "react"
export const PromiseError = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [data, setData] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            throw new Error("Error fetching data");
        }

        fetchData()
            .then(response => {
                setData(response);
            })
            .catch(error => {
                console.error("Error:", error);
                setError("Error occurred while fetching data");
                throw error; // This will trigger the error boundary
            });

    }, []);
    if (error) {
        throw new Error(error);
    }
    return (
        <div>
            <h2>{data}</h2>

        </div>
    );
}