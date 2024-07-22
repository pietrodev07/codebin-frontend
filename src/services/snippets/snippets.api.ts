import { Response } from "@/types";
import { Snippet } from "@/types/snippet";
import { api, SNIPPETS_URL, generateUrl } from "@/api";

export const getSnippets = async () => {
  const url = generateUrl(SNIPPETS_URL, "/private");
  const res = await api.get(url);
  return res as Response<Snippet[]>;
};

export const getPrivateSnippet = async (id: string) => {
  const url = generateUrl(SNIPPETS_URL, `/private/${id}`);
  const res = await api.get(url);
  return res as Response<Snippet>;
};

export const getPublicSnippet = async (id: string) => {
  const url = generateUrl(SNIPPETS_URL, `/${id}`);
  const res = await api.get(url);
  return res as Response<Snippet>;
};
