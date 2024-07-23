import { Navbar } from "@/components/core/navbar";
import { useAuth } from "@/services/auth/auth.hook";
import { ThemeDropdown } from "@/components/core/theme-dropdown";

export const DashboardNavbar = () => {
  const { logout } = useAuth();

  return (
    <Navbar>
      <ThemeDropdown />

      <button
        className="btn btn-sm btn-solid-error border border-border"
        onClick={logout}
      >
        Logout
      </button>
    </Navbar>
  );
};
