import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { LanguageName } from "@uiw/codemirror-extensions-langs";

import { CodeBlock } from "@/components/core/code-block";
import { useSnippets } from "@/services/snippets/snippets.hook";

export const DashboardViewPage = () => {
  const { id } = useParams();
  const { getPrivateSnippet, snippet } = useSnippets();

  useEffect(() => {
    getPrivateSnippet(id!);
  }, [getPrivateSnippet, id]);

  return (
    <main className="flex flex-1 flex-col items-center gap-10 py-5">
      {!snippet && (
        <div className="mb-auto mt-auto flex flex-col items-center justify-center gap-5">
          <h1 className="title text-content2">Snippet not found...</h1>
          <NavLink to="/" className="btn btn-solid-primary w-fit">
            Back to home
          </NavLink>
        </div>
      )}

      {snippet && (
        <>
          <div className="flex flex-col gap-5 max-sm:w-full">
            <h1 className="title text-content2"># {snippet?.title}</h1>

            <div className="flex justify-center gap-5 max-sm:justify-start">
              <span className="badge badge-flat-primary w-fit">{snippet?.type}</span>
              <span className="primary badge badge-flat-success w-fit">
                {snippet?.language || "no language"}
              </span>
            </div>
          </div>

          <p className="max-sm:w-full">{snippet?.description}</p>

          <CodeBlock
            code={snippet.code}
            language={snippet.language as LanguageName}
          />
        </>
      )}
    </main>
  );
};
