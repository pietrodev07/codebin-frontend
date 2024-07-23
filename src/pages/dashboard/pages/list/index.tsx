import { useEffect } from "react";

import { CreateButton } from "./components/create-button";
import { SnippetsTable } from "./components/snippets-table";
import { useSnippets } from "@/services/snippets/snippets.hook";

export const DashboardListPage = () => {
  const { snippets, getSnippets } = useSnippets();

  useEffect(() => {
    getSnippets();
  }, [getSnippets]);

  return (
    <section className="flex flex-1 flex-col justify-between gap-5">
      <SnippetsTable snippets={snippets} />
      <CreateButton />
    </section>
  );
};
