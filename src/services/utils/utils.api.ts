import { ContactBody, Response } from "@/types";
import { api, generateUrl, UTILS_URL } from "@/api";

export const contact = async (body: ContactBody) => {
  const url = generateUrl(UTILS_URL, "/contact");
  const res = await api.post(url, body);
  return res as Response<null>;
};
