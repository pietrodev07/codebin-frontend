import { useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";

import { HandleChangeEvent } from "@/types";
import { EditSnippet } from "@/types/snippet";
import { useSnippets } from "@/services/snippets/snippets.hook";

const snippetsInitialState: EditSnippet = {
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

export const useEditSnippet = () => {
  const { editSnippet, snippet: fetchedSnippet } = useSnippets();
  const [snippet, setSnippet] = useState<EditSnippet>(snippetsInitialState);
  const [isDirty, setIsDirty] = useState(isDirtyInitialState);
  const navigate = useNavigate();

  useEffect(() => {
    if (fetchedSnippet !== null) {
      setSnippet({
        title: fetchedSnippet?.title,
        description: fetchedSnippet?.description,
        language: fetchedSnippet?.language,
        code: fetchedSnippet?.code,
        type: fetchedSnippet?.type,
      });
    }
  }, [fetchedSnippet]);

  const handleEditorChange = (value: string) => {
    setSnippet((prev) => ({ ...prev, code: value }));
  };

  const handleChange = (e: HandleChangeEvent) => {
    const { name, value } = e.target;
    setSnippet((prev) => ({ ...prev, [name]: value }));
    setIsDirty((prev) => ({
      ...prev,
      [name]: value.length > 0,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await editSnippet(fetchedSnippet?.id || "", snippet);
    navigate("/dashboard");

    setSnippet(snippetsInitialState);
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
