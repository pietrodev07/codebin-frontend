import { useSnippets } from "@/services/snippets/snippets.hook";

interface DeleteButtonProps {
  id: string;
}

export const DeleteButton = ({ id }: DeleteButtonProps) => {
  const { toggleModal } = useSnippets();

  return (
    <button
      className="btn btn-xs btn-solid-error"
      onClick={() => toggleModal({ id })}
    >
      Delete
    </button>
  );
};
