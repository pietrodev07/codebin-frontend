import { createBrowserRouter, Outlet } from "react-router-dom";

import { HomePage, LoginPage } from "@/pages";

type Router = ReturnType<typeof createBrowserRouter>;

export const router: Router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <HomePage />,
  },
  {
    id: "auth",
    path: "auth",
    element: <Outlet />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
