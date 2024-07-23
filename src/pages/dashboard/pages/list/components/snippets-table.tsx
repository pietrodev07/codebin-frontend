import { Link } from "react-router-dom";

import { Snippet } from "@/types/snippet";
import { DeleteButton } from "./delete-button";
import { formatDate } from "@/utils/formatters";

interface SnippetsTableProps {
  snippets: Snippet[];
}

export const SnippetsTable = ({ snippets }: SnippetsTableProps) => {
  return (
    <div className="flex max-h-[calc(100svh-48px-58px-80px)] w-auto flex-col gap-5 overflow-auto overflow-x-auto rounded-xl border border-border bg-backgroundSecondary p-4">
      <table className="table table-compact">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Language</th>
            <th>Type</th>
            <th>Created At</th>
            <th>Updatetd At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {snippets.map((snippet) => {
            return (
              <tr>
                <td>{snippet.id}</td>
                <td>{snippet.title}</td>
                <td className="max-w-44 overflow-hidden text-ellipsis whitespace-nowrap">
                  {snippet.description}
                </td>
                <td>{snippet.language || "no language"}</td>
                <td>{snippet.type}</td>
                <td>{formatDate(snippet.createdAt)}</td>
                <td>{formatDate(snippet.updatedAt)}</td>
                <td className="flex gap-4">
                  <Link
                    className="btn btn-xs btn-solid-primary"
                    to={`view/${snippet.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-xs btn-solid-warning"
                    to={`edit/${snippet.id}`}
                  >
                    Edit
                  </Link>
                  <DeleteButton id={snippet.id} />
                  <button
                    className="btn btn-xs btn-solid-secondary"
                    disabled={snippet.type === "private" ? true : false}
                  >
                    Share
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
