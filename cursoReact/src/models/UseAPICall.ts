import type { AxiosResponse } from "axios";
type ApiCallType<T> = Promise<AxiosResponse<T>>;
export interface UseAPICall<T> {
    call: ApiCallType<T>;
    controller?: AbortController;
}