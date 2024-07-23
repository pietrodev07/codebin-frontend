import { ChangeEvent } from "react";

interface SearchParam {
  key: string;
  value: string;
}

export type SearchParams = SearchParam[];

export interface Response<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface ContactBody {
  email: string;
  name: string;
  message: string;
}

export type HandleChangeEvent = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

export type Theme = "light" | "dark" | "system";
