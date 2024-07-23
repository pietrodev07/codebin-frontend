import { createBrowserRouter, Outlet } from "react-router-dom";

import {
  HomePage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  VerifyAccountPage,
} from "@/pages";

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
]);
