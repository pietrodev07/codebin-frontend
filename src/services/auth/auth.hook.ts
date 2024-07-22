import { create } from "zustand";

import { AuthState } from "./auth.model";

export const useAuth = create<AuthState>(() => {
  return {
    isLogged: false,
    isLoading: true,
    login: async () => {},
    register: async () => {},
    forgot: async () => {},
    reset: async () => {},
    verify: async () => {},
    logout: async () => {},
    me: async () => {},
  };
});
