import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { HandleChangeEvent } from "@/types";
import { CreateSnippet } from "@/types/snippet";
import { useSnippets } from "@/services/snippets/snippets.hook";

const snippetInitialState: CreateSnippet = {
  title: "",
  description: "",
  language: "",
  code: "",
  type: "private",
};

const isDirtyInitialState = {
  title: false,
  description: false,
  language: false,
  type: false,
};

export const useCreateSnippet = () => {
  const [snippet, setSnippet] = useState<CreateSnippet>(snippetInitialState);
  const [isDirty, setIsDirty] = useState(isDirtyInitialState);
  const { createSnippet } = useSnippets();
  const navigate = useNavigate();

  const handleEditorChange = (value: string) => {
    setSnippet((prev) => ({ ...prev, code: value }));
  };

  const handleChange = (e: HandleChangeEvent) => {
    const { name, value } = e.target;
    setSnippet((prev) => ({ ...prev, [name]: value }));
    setIsDirty((prev) => ({
      ...prev,
      [name]: value.length !== 0,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await createSnippet(snippet);
    navigate("/dashboard");

    setSnippet(snippetInitialState);
    setIsDirty(isDirtyInitialState);
  };

  const isTitleValid = snippet.title.length > 5;
  const isDescriptionValid = snippet.description.length > 5;
  const isFormValid = isTitleValid && isDescriptionValid;

  return {
    actions: { handleChange, handleSubmit, handleEditorChange },
    validators: { isTitleValid, isDescriptionValid, isFormValid },
    isDirty,
    snippet,
  };
};
