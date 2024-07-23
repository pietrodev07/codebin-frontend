import { useNavigate } from "react-router-dom";
import { LanguageName } from "@uiw/codemirror-extensions-langs";

import { CodeEditor } from "../../components/code-editor";
import { SnippetForm } from "../../components/snippet-form";
import { ConfirModal } from "../../components/confirm-modal";
import { useCreateSnippet } from "./hooks/use-create-snippet";
import { useSnippets } from "@/services/snippets/snippets.hook";

export const DashboardCreatePage = () => {
  const { actions, validators, isDirty, snippet } = useCreateSnippet();
  const { modal, toggleModal } = useSnippets();
  const navigate = useNavigate();

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
        title="Are you sure to cancel the creation?"
      />
    </section>
  );
};
