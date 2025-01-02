import axios, { AxiosError, AxiosResponse } from "axios";

const baseURL = import.meta.env.REACT_APP_API_URL || 'http://localhost:8080';

const axiosConfig = {
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
};

export const api = axios.create(axiosConfig);

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

