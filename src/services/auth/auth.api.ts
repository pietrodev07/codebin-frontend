import { Response } from "@/types";
import { LoginUser } from "@/types/user";
import { AUTH_URL, generateUrl, api } from "@/api";

export const login = async (user: LoginUser) => {
  const url = generateUrl(AUTH_URL, "/login");
  const res = await api.post(url, user);
  return res as Response<null>;
};
