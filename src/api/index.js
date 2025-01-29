import axios from 'axios';

// const BASE_URL = 'http://127.0.0.1:8000';
const BASE_URL = process.env.REACT_APP_BASE_URL;

const apiConfig = {
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Ensures that cookies (including HttpOnly cookies) are sent with requests
};

// Create an Axios instance with custom configuration
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  ...apiConfig
});

export default axiosInstance;
