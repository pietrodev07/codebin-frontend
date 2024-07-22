import { Response } from "@/types";
import { api, SNIPPETS_URL, generateUrl } from "@/api";
import { CreateSnippet, Snippet } from "@/types/snippet";

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

export const createSnippet = async (snippet: CreateSnippet) => {
  const url = generateUrl(SNIPPETS_URL, "/private");
  const res = await api.post(url, snippet);
  return res as Response<null>;
};
