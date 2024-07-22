import { get, post, put } from "./api";
import { SearchParams } from "@/types";

export const SERVER_URL = import.meta.env.VITE_API_BASE_URL;

export const AUTH_URL = "/auth";
export const SNIPPETS_URL = "/snippets";
export const UTILS_URL = "/utils";

export const generateUrl = (
  url: string,
  endpoint: string,
  params?: SearchParams,
) => {
  let compelteUrl = `${SERVER_URL}${url}${endpoint}`;

  if (params && params.length > 0) {
    const searchParams = new URLSearchParams();

    for (const param of params) {
      searchParams.append(param.key, param.value);
    }

    compelteUrl += `?${searchParams.toString()}`;
  }

  return compelteUrl;
};

export const api = { get, post, put };
