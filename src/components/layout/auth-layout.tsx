import clsx from "clsx";
import { NavLink, useNavigate } from "react-router-dom";
import { HTMLAttributes, PropsWithChildren, useEffect } from "react";

import { Navbar } from "../core/navbar";
import { useAuth } from "@/services/auth/auth.hook";
import { ThemeDropdown } from "../core/theme-dropdown";

interface AuthLayoutProps extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {
  navbar?: {
    forgotBtn?: boolean;
    registerBtn?: boolean;
    loginBtn?: boolean;
  };
}

export const AuthLayout = ({ navbar, className, children }: AuthLayoutProps) => {
  const { isLogged } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("/dashboard", { replace: true });
    }
  }, [isLogged, navigate]);

  return (
    <>
      <Navbar>
        <ThemeDropdown />

        {navbar?.loginBtn && (
          <NavLink
            to="/auth/login"
            className="btn btn-sm btn-solid-primary border border-border"
          >
            Login
          </NavLink>
        )}

        {navbar?.registerBtn && (
          <NavLink
            to="/auth/register"
            className="btn btn-sm btn-solid-secondary border border-border"
          >
            Register
          </NavLink>
        )}

        {navbar?.forgotBtn && (
          <NavLink
            to="/auth/forgot"
            className="btn btn-sm btn-solid-warning border border-border"
          >
            Forgot
          </NavLink>
        )}
      </Navbar>

      <main className={clsx("flex-1", className)}>{children}</main>
    </>
  );
};
