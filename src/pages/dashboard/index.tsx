import { Outlet } from "react-router-dom";

export const DashboardPage = () => {
  return (
    <>
      <h1 className="title">Dashboard Page</h1>
      <Outlet />
    </>
  );
};
