import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LanguageName } from "@uiw/codemirror-extensions-langs";

import { useEditSnippet } from "./hooks/use-edit-snippet";
import { SnippetForm } from "../../components/snippet-form";
import { ConfirModal } from "../../components/confirm-modal";
import { useSnippets } from "@/services/snippets/snippets.hook";
import { CodeEditor } from "@/pages/dashboard/components/code-editor";

export const DashboardEditPage = () => {
  const { actions, validators, isDirty, snippet } = useEditSnippet();
  const { getPrivateSnippet, modal, toggleModal } = useSnippets();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPrivateSnippet(id!);
  }, [getPrivateSnippet, id]);

  return (
    <section className="flex flex-1 gap-5 max-md:flex-col">
      <CodeEditor
        onChange={actions.handleEditorChange}
        code={snippet.code}
        language={snippet.language as LanguageName}
      />

      <SnippetForm
        validators={validators}
        actions={actions}
        isDirty={isDirty}
        snippet={snippet}
      />

      <ConfirModal
        isOpen={modal.isOpen}
        onConfirm={() => {
          toggleModal();
          navigate("/dashboard");
        }}
        onCancel={toggleModal}
        title="Are you sure to cancel the editation?"
      />
    </section>
  );
};
