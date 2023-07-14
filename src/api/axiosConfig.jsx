import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "content-type": "application/json",
    },
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    const token = currentUser?.token || null;
    if (token) {
        config.headers = {
            ...config.headers,
            token: token,
        };
    }
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        // Handle errors
        throw error.response.data;
    }
);
export default axiosClient;