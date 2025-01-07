import axios from 'axios';
import { getCookie } from '../utils';

const BASE_URL = 'http://127.0.0.1:8000';
let csrftoken = getCookie('csrftoken');

const apiConfig = {
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Ensures that cookies (including HttpOnly cookies) are sent with requests
};

// Add the CSRF token to the headers if it exists (i.e., if the user is authenticated)
csrftoken && (apiConfig.headers['X-CSRFToken'] = csrftoken);

// Create an Axios instance with custom configuration
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  ...apiConfig
});

export default axiosInstance;
