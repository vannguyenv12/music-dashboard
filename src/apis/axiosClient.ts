import axios from 'axios';
import { createBackendUrl } from '../configs/app-config';

const axiosClient = axios.create({
  baseURL: createBackendUrl('/api/v1'),
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers['Authorization'] = `Bearer ${localStorage.getItem(
      'accessToken'
    )}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error?.response?.data || error);
  }
);

export default axiosClient;
