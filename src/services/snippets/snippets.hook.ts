import { create } from "zustand";

import { SnippetsState } from "./snippets.model";

export const useSnippets = create<SnippetsState>(() => {
  return {
    modal: { isOpen: false, data: {} },
    snippets: [],
    snippet: null,
    toggleModal: () => {},
    getSnippets: async () => {},
    getPrivateSnippet: async () => {},
    getPublicSnippet: async () => {},
    createSnippet: async () => {},
    editSnippet: async () => {},
    deleteSnippet: async () => {},
  };
});
