import { NavLink } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-5">
      <h1 className="title text-content2">Page not found...</h1>

      <NavLink to="/" className="btn btn-solid-primary w-fit">
        Back to home
      </NavLink>
    </main>
  );
};
