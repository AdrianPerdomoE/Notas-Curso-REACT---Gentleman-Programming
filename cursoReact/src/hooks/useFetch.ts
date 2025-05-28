import { useEffect, useState } from "react";

type Data<T> = T | null;
type Err = Error | null;
interface Params<T> {
    data: Data<T>;
    loading: boolean;
    error: Err;
}

export const useFetch = <T>(url: string): Params<T> => {
    const [data, setData] = useState<Data<T>>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Err>(null);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url, controller);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const jsonData: T = await response.json();
                setData(jsonData);
                setError(null);
            }
            catch (err) {
                setError(err as Error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
        return () => {
            controller.abort(); // Clean up the fetch request on unmount
        }
    }, [url]);

    return { data, loading, error } as Params<T>;

}

