import { Link } from "react-router-dom";

export const CreateButton = () => {
  return (
    <Link
      to="create"
      className="btn btn-solid-primary w-fit self-end border border-border"
    >
      Create
    </Link>
  );
};
