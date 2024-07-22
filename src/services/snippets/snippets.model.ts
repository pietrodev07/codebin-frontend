import { CreateSnippet, Snippet, EditSnippet } from "@/types/snippet";

export interface SnippetsState {
  modal: { isOpen: boolean; data: object };
  snippets: Snippet[];
  snippet: Snippet | null;
  toggleModal: (data?: object) => void;
  getSnippets: () => Promise<void>;
  getPrivateSnippet: (id: string) => Promise<void>;
  getPublicSnippet: (id: string) => Promise<void>;
  createSnippet: (snippet: CreateSnippet) => Promise<void>;
  editSnippet: (id: string, snippet: EditSnippet) => Promise<void>;
  deleteSnippet: (id: string) => Promise<void>;
}
