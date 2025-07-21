import { useState, useEffect } from 'react';
import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

const REACT_APP_SERVER_URL = 'https://itabs.com.tr';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: REACT_APP_SERVER_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer test_alesaadi13"
    },
    timeout: 5000,
});

const useApi = (url: string, defaultConfig?: AxiosRequestConfig) => {
    
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.get(url, defaultConfig);
            console.log("response",response)
            setData(response.data);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const sendData = async (payload: any, config?: AxiosRequestConfig) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axiosInstance.post(url, payload, { ...defaultConfig, ...config });
            setData(response.data);
            return response.data;
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error, sendData, fetchData };
};

export default useApi;
