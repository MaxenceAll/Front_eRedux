import axios from "axios";
import config from "../config";

export const axiosInstance = axios.create({
    baseURL: config.api.url,
    withCredentials: true,
});

const fetcher = {};

fetcher.get = async (endpoint, params = {}) => {
    try {
    const response = await axiosInstance.get(endpoint, { params });
    return response?.data;
    } catch (error) {
    console.error(error);
    return {
        data: null,
        result: false,
        message: error?.response?.data?.message,
        error: error?.message,
    };
    }
};

fetcher.post = async (endpoint, data = {}) => {
    try {
    const response = await axiosInstance.post(endpoint, data);
    return response?.data;
    } catch (error) {
    console.error(error);
    return {
        data: null,
        result: false,
        message: error?.response?.data?.message,
        error: error?.message,
    };
    }
};

fetcher.put = async (endpoint, data = {}) => {
    try {
    const response = await axiosInstance.put(endpoint, data);
    return response?.data;
    } catch (error) {
    console.error(error);
    return {
        data: null,
        result: false,
        message: error?.response?.data?.message,
        error: error?.message,
    };
    }
};

fetcher.patch = async (endpoint, data = {}) => {
    try {
    const response = await axiosInstance.patch(endpoint, data);
    return response?.data;
    } catch (error) {
    console.error(error);
    return {
        data: null,
        result: false,
        message: error?.response?.data?.message,
        error: error?.message,
    };
    }
};

fetcher.delete = async (endpoint, params = {}) => {
    try {
    const response = await axiosInstance.delete(endpoint, { params });
    return response?.data;
    } catch (error) {
    console.error(error);
    return {
        data: null,
        result: false,
        message: error?.response?.data?.message,
        error: error?.message,
    };
    }
};

export default fetcher;
