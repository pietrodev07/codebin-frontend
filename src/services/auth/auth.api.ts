import { Response } from "@/types";
import { AUTH_URL, generateUrl, api } from "@/api";
import { LoginUser, RegisterUser } from "@/types/user";

export const login = async (user: LoginUser) => {
  const url = generateUrl(AUTH_URL, "/login");
  const res = await api.post(url, user);
  return res as Response<null>;
};

export const register = async (user: RegisterUser) => {
  const url = generateUrl(AUTH_URL, "/register");
  const res = await api.post(url, user);
  return res as Response<null>;
};
