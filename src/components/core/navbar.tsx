import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = ({ children }: PropsWithChildren) => {
  return (
    <header className="flex items-center justify-between rounded-xl border border-border bg-gray-2 p-3">
      <NavLink to="/">
        <h1 className="text-xl font-bold">Codebin</h1>
      </NavLink>

      <nav className="flex items-center gap-5">{children}</nav>
    </header>
  );
};
