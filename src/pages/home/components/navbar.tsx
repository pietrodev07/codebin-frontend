import { NavLink } from "react-router-dom";

import { Navbar } from "@/components/core/navbar";
import { IfLogged } from "@/components/auth/if-logged";
import { ThemeDropdown } from "@/components/core/theme-dropdown";

export const HomeNavbar = () => {
  return (
    <Navbar>
      <ThemeDropdown />

      <IfLogged
        ifNotLogged={
          <>
            <NavLink
              to="/auth/login"
              className="btn btn-sm btn-solid-primary border border-border"
            >
              Login
            </NavLink>

            <NavLink
              to="/auth/register"
              className="btn btn-sm btn-solid-secondary border border-border"
            >
              Register
            </NavLink>
          </>
        }
      >
        <NavLink
          to="/dashboard"
          className="btn btn-sm btn-solid-warning border border-border"
        >
          Dashboard
        </NavLink>
      </IfLogged>
    </Navbar>
  );
};
