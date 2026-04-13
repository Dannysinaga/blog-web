import { create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstance2 } from "../lib/axios";

interface UserAuth {
  id: number;
  name: string;
  email: string;
  image: string | null;
  role: string;
  accessToken: string;
  refreshToken?: string; 
}

type Store = {
  user: UserAuth | null;
  login: (user: UserAuth) => void;
  logout: () => void;
};

export const useAuth = create<Store>()(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      logout: async () => {
        await axiosInstance2.post("/auth/logout");
        set({ user: null });
        window.location.href = "/";
      },
    }),
    { name: "auth" },
  ),
);

