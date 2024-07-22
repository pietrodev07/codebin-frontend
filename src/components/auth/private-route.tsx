import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "@/services/auth/auth.hook";

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { isLogged } = useAuth();

  return isLogged ? children : <Navigate to="/auth/login" replace />;
};
