// axiosInstance.js
import axios from 'axios';
import store from '../store/Store'; // import your Redux store
import { refreshToken } from '../store/AuthSlice'; // import your refreshToken action

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: 'http://212.111.80.94/', // your base URL
});

// Add a request interceptor to include the token in the headers
axiosInstance.interceptors.request.use((config) => {
  const { auth } = store.getState();
  if (auth.token) {
    config.headers['Authorization'] = `Bearer ${auth.token}`;
  }
  return config;
});

// Add a response interceptor to handle 401 errors and refresh the token
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Dispatch the refreshToken action
        const result = await store.dispatch(refreshToken());
        const newToken = result.payload.token;
        // Update the Authorization header with the new token
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        // Retry the original request with the new token
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // If token refresh fails, redirect to login or handle as needed
        console.error('Token refresh failed:', refreshError);
        store.dispatch({ type: 'auth/logout' });
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;