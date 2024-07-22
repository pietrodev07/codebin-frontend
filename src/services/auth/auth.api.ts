import { Response, SearchParams } from "@/types";
import { AUTH_URL, generateUrl, api } from "@/api";
import { ForgotUser, LoginUser, RegisterUser, ResetUser } from "@/types/user";

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

export const forgot = async (user: ForgotUser) => {
  const url = generateUrl(AUTH_URL, "/forgot");
  const res = await api.post(url, user);
  return res as Response<null>;
};

export const reset = async (user: ResetUser, params: SearchParams) => {
  const url = generateUrl(AUTH_URL, "/reset", params);
  const res = await api.post(url, user);
  return res as Response<null>;
};

export const verify = async (params: SearchParams) => {
  const url = generateUrl(AUTH_URL, "/verify", params);
  const res = await api.get(url);
  return res as Response<null>;
};
