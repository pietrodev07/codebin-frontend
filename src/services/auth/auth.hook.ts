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
    register: async (user) => {
      const res = await authService.register(user);
      renderToast(res.success, res.message);
    },
    forgot: async (user) => {
      const res = await authService.forgot(user);
      renderToast(res.success, res.message);
    },
    reset: async (user, params) => {
      const res = await authService.reset(user, params);
      renderToast(res.success, res.message);
    },
    verify: async (params) => {
      const res = await authService.verify(params);
      renderToast(res.success, res.message);
    },
    logout: async () => {
      const res = await authService.logout();
      res.success && set({ isLogged: false });
      renderToast(res.success, res.message);
    },
    me: async () => {
      const res = await authService.me();
      res.success && set({ isLogged: true });
      set({ isLoading: false });
    },
  };
});
