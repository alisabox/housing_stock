import axios from 'axios';

const BASE_URL = 'https://dispex.org/api/vtest';
const REQUEST_TIMEOUT = 5000;

export const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,

    (error) => {
      return Promise.reject(error);
    },
  );

  api.interceptors.request.use(
    (config) => {
      return config;
    },
  );

  return api;
};
