
import { useCallback, useEffect, useState } from "react";
import type { UseAPICall } from "../models/UseAPICall";


type Data<T> = T | null;

type CustomError = Error | null;

type UseAPIOptions = {
    autoFetch?: boolean;
}


interface UseAPIResult<T> {
    loading: boolean;
    error: CustomError;
    data: Data<T>;
    fetch: () => void;
}

export const UseAPI = <T,>(apiCall: UseAPICall<T>, options?: UseAPIOptions): UseAPIResult<T> => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<CustomError>(null);
    const [data, setData] = useState<Data<T>>(null);
    // You may want to implement the API call logic here
    const fetch = useCallback(() => {
        const { call, controller } = apiCall;

        setLoading(true);
        call.then((response) => {
            setData(response.data);
            setError(null);
        }).catch((err) => {
            setError(err);
            setData(null);
        }).finally(() => {
            setLoading(false);
        });
        return () => {
            if (controller) {
                controller.abort();
            }
        };
    }, []);

    useEffect(() => {
        if (options && options.autoFetch) {
            const cleanup = fetch();
            return cleanup;
        }
    }, [fetch, options]);

    return { loading, error, data, fetch };
}
