import { createBrowserRouter, Outlet } from "react-router-dom";

import {
  HomePage,
  SnippetPage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  VerifyAccountPage,
  DashboardPage,
  DashboardListPage,
  DashboardCreatePage,
  DashboardEditPage,
  DashboardViewPage,
  NotFoundPage,
} from "@/pages";
import { PrivateRoute } from "@/components/auth/private-route";

type Router = ReturnType<typeof createBrowserRouter>;

export const router: Router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <HomePage />,
  },
  {
    path: "snippets/:id",
    element: <SnippetPage />,
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
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "forgot",
        element: <ForgotPasswordPage />,
      },
      {
        path: "reset",
        element: <ResetPasswordPage />,
      },
      {
        path: "verify",
        element: <VerifyAccountPage />,
      },
    ],
  },
  {
    id: "dashboard",
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardListPage />,
      },
      {
        path: "create",
        element: <DashboardCreatePage />,
      },
      {
        path: "edit/:id",
        element: <DashboardEditPage />,
      },
      {
        path: "view/:id",
        element: <DashboardViewPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
