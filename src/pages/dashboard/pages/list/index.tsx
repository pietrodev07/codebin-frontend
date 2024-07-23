import { useEffect } from "react";

import { CreateButton } from "./components/create-button";
import { SnippetsTable } from "./components/snippets-table";
import { ConfirModal } from "../../components/confirm-modal";
import { useSnippets } from "@/services/snippets/snippets.hook";

export const DashboardListPage = () => {
  const { snippets, modal, getSnippets, deleteSnippet, toggleModal } = useSnippets();

  useEffect(() => {
    getSnippets();
  }, [getSnippets]);

  return (
    <section className="flex flex-1 flex-col justify-between gap-5">
      <SnippetsTable snippets={snippets} />
      <CreateButton />

      <ConfirModal
        isOpen={modal.isOpen}
        onConfirm={() => deleteSnippet((modal.data as { id: string }).id)}
        onCancel={toggleModal}
        title="Are you sure to delete this snippet?"
      />
    </section>
  );
};
