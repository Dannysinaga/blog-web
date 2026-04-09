import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://securepies-us.backendless.app/api",
});

export const axiosInstance2 = axios.create({
  baseURL: "http://localhost:8000",
});

// bikir84466@iaciu.com
// Admin123
