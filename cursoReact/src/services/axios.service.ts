import axios, { type AxiosInstance, type AxiosResponse, type InternalAxiosRequestConfig } from "axios";
export let axiosInstance: AxiosInstance;
export const createAxios = (baseURL: string) => {
    axiosInstance = axios.create({ baseURL })
}

const setUpInterceptors = () => {
    axiosInstance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            // You can modify the request config here if needed
            const token = cookieStore.get("token");
            if (token) {
                config.headers.set(`Authorization Bearer: ${token}`)
            }

            console.log("Request made to", config.url);
            return config;
        },
        (error) => {
            // Handle request error
            return Promise.reject(error);
        }
    );
    axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => {
            // You can modify the response here if needed
            console.log("Response received from", response.config.url);
            return response;
        },
        (error) => {
            // Handle response error
            if (error.response) {
                console.error("Error response from server:", error.response.data);
            }
            console.error("Error in response", error);
            return Promise.reject(error);
        }
    );
}


export const initAxios = () => {
    createAxios("https://rickandmortyapi.com/api");
    setUpInterceptors();
    return axiosInstance;
}