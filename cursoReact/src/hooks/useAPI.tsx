
import { useCallback, useEffect, useState } from "react";
import type { UseAPICall } from "../models/UseAPICall";


type Data<T> = T | null;

type CustomError = Error | null;

type UseAPIOptions<P> = {
    autoFetch?: boolean;

} & (P extends null | undefined | void ? { params?: P } : { params: P });

type APIFunction<T, P> = P extends null | undefined | void ?
    () => UseAPICall<T> :
    (param: P) => UseAPICall<T>;

interface UseAPIResult<T, P> {
    loading: boolean;
    error: CustomError;
    data: Data<T>;
    fetch: (param: P) => void;
}

export const UseAPI = <T, P>(apiCall: APIFunction<T, P>, options?: UseAPIOptions<P>): UseAPIResult<T, P> => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<CustomError>(null);
    const [data, setData] = useState<Data<T>>(null);
    // You may want to implement the API call logic here
    const fetch = useCallback((param?: P) => {

        const { call, controller } = apiCall(param as P);

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
    }, [apiCall]);

    useEffect(() => {
        if (options?.autoFetch) {
            const cleanup = fetch(options?.params);
            return cleanup;
        }
    }, [fetch, options?.autoFetch, options?.params]);

    return { loading, error, data, fetch };
}
