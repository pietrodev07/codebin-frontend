import { create } from "zustand";

import { AuthState } from "./auth.model";
import * as authService from "./auth.api";
import { renderToast } from "@/utils/toast";

export const useAuth = create<AuthState>((set) => {
  return {
    isLogged: false,
    isLoading: true,
    login: async (user) => {
      const res = await authService.login(user);
      res.success && set({ isLogged: true });
      renderToast(res.success, res.message);
    },
    register: async () => {},
    forgot: async () => {},
    reset: async () => {},
    verify: async () => {},
    logout: async () => {},
    me: async () => {},
  };
});
