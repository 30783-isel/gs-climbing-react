import axios from 'axios';
import { API_CONFIG } from './constants';

const api = axios.create({
  baseURL: API_CONFIG.baseUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const username = sessionStorage.getItem('authenticatedUser');
    const password = sessionStorage.getItem('userPassword');

    if (username && password && !config.url?.includes('basicauth')) {
      const token = window.btoa(`${username}:${password}`);

      // Axios 1.6+: usar método set() do AxiosHeaders
      if (config.headers) {
        config.headers = axios.AxiosHeaders.from(config.headers); // garante que é AxiosHeaders
        config.headers.set('Authorization', `Basic ${token}`);
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      sessionStorage.removeItem('authenticatedUser');
      sessionStorage.removeItem('userPassword');
      sessionStorage.removeItem('roleUser');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
