import { LanguageName } from "@uiw/codemirror-extensions-langs";

import { CodeEditor } from "../../components/code-editor";
import { useCreateSnippet } from "./hooks/use-create-snippet";

export const DashboardCreatePage = () => {
  const { actions, snippet } = useCreateSnippet();

  return (
    <section className="flex flex-1 gap-5 max-md:flex-col">
      <CodeEditor
        onChange={actions.handleEditorChange}
        code={snippet.code}
        language={snippet.language as LanguageName}
      />
    </section>
  );
};
