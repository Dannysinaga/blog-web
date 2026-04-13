import axios from "axios";
import { useAuth } from "../stores/useAuth";

export const refreshInstance = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
});

export const axiosInstance2 = axios.create({
  baseURL: "http://localhost:8000/",
  withCredentials: true,
});

axiosInstance2.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      error.response?.data?.message === "Token expired" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        await refreshInstance.post("/auth/refresh");
        return axiosInstance2(originalRequest);
      } catch (err) {
        useAuth.getState().logout();
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);