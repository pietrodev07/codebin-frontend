import { Response } from "@/types";
import { Snippet } from "@/types/snippet";
import { api, SNIPPETS_URL, generateUrl } from "@/api";

export const getSnippets = async () => {
  const url = generateUrl(SNIPPETS_URL, "/private");
  const res = await api.get(url);
  return res as Response<Snippet[]>;
};
