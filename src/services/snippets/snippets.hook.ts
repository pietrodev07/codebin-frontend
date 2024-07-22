import { create } from "zustand";

import { renderToast } from "@/utils/toast";
import { SnippetsState } from "./snippets.model";
import * as snippetsService from "./snippets.api";

export const useSnippets = create<SnippetsState>((set) => {
  return {
    modal: { isOpen: false, data: {} },
    snippets: [],
    snippet: null,
    toggleModal: () => {},
    getSnippets: async () => {
      const res = await snippetsService.getSnippets();
      res.success && set({ snippets: res.data });
    },
    getPrivateSnippet: async (id) => {
      const res = await snippetsService.getPrivateSnippet(id);
      res.success && set({ snippet: res.data });
    },
    getPublicSnippet: async (id) => {
      const res = await snippetsService.getPublicSnippet(id);
      res.success && set({ snippet: res.data });
    },
    createSnippet: async (snippet) => {
      const res = await snippetsService.createSnippet(snippet);
      renderToast(res.success, res.message);
    },
    editSnippet: async () => {},
    deleteSnippet: async () => {},
  };
});
