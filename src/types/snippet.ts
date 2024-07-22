interface BaseSnippet {
  title: string;
  description: string;
  language: string;
  code: string;
  type: "public" | "private";
}

export interface Snippet extends BaseSnippet {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSnippet extends BaseSnippet {}

export interface EditSnippet extends BaseSnippet {}
