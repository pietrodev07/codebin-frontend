import { Outlet } from "react-router-dom";

import { DashboardNavbar } from "./components/navbar";

export const DashboardPage = () => {
  return (
    <>
      <DashboardNavbar />
      <Outlet />
    </>
  );
};
