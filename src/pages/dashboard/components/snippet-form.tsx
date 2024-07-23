import { FormEvent } from "react";
import { langNames } from "@uiw/codemirror-extensions-langs";

import { HandleChangeEvent } from "@/types";
import { CreateSnippet, EditSnippet } from "@/types/snippet";
import { useSnippets } from "@/services/snippets/snippets.hook";
import { getInputClass, getTextareaClass } from "@/utils/get-class";

interface SnippetFormProps {
  snippet: CreateSnippet | EditSnippet;
  isDirty: {
    description: boolean;
    language: boolean;
    title: boolean;
    type: boolean;
  };
  validators: {
    isDescriptionValid: boolean;
    isFormValid: boolean;
    isTitleValid: boolean;
  };
  actions: {
    handleEditorChange: (value: string) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
    handleChange: (e: HandleChangeEvent) => void;
  };
}

export const SnippetForm = ({
  actions,
  validators,
  isDirty,
  snippet,
}: SnippetFormProps) => {
  const { toggleModal } = useSnippets();

  return (
    <form
      className="flex w-1/4 flex-col gap-6 rounded-lg border border-border bg-backgroundSecondary p-4 max-lg:w-full"
      onSubmit={actions.handleSubmit}
    >
      <h1 className="title text-content2">Snippet Settings</h1>

      <input
        className={getInputClass(isDirty.title, validators.isTitleValid)}
        placeholder="Title"
        name="title"
        type="text"
        onChange={actions.handleChange}
        value={snippet.title}
      />

      <textarea
        className={getTextareaClass(
          isDirty.description,
          validators.isDescriptionValid,
        )}
        placeholder="Description"
        name="description"
        rows={10}
        onChange={actions.handleChange}
        value={snippet.description}
      />

      <select
        className="select select-solid max-w-full"
        name="language"
        onChange={actions.handleChange}
        value={snippet.language}
      >
        <option value="">Select a language</option>
        {langNames.map((language, index) => (
          <option key={index} value={language}>
            {language}
          </option>
        ))}
      </select>

      <div className="flex flex-col gap-6">
        <label className="flex items-center gap-2">
          <input
            className="radio radio-sm radio-solid"
            type="radio"
            name="type"
            value="private"
            checked={snippet.type === "private"}
            onChange={actions.handleChange}
          />
          Private
        </label>

        <label className="flex items-center gap-2">
          <input
            className="radio radio-sm radio-solid"
            type="radio"
            name="type"
            value="public"
            checked={snippet.type === "public"}
            onChange={actions.handleChange}
          />
          Public
        </label>
      </div>

      <div className="mt-auto flex gap-5">
        <button
          className="btn btn-block btn-solid-error border border-border"
          type="button"
          onClick={toggleModal}
        >
          Cancel
        </button>

        <button
          className="btn btn-block btn-solid-success border border-border"
          type="submit"
          disabled={!validators.isFormValid}
          aria-disabled={!validators.isFormValid}
        >
          Save
        </button>
      </div>
    </form>
  );
};
