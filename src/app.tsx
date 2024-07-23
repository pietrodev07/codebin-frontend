import { Toaster } from "sonner";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { RouterProvider } from "react-router-dom";

import { Theme } from "@/types";
import { router } from "@/data/router";
import { toastOptions } from "@/utils/toast";
import { useAuth } from "@/services/auth/auth.hook";
import { Loading } from "./components/core/loading";

export const App = () => {
  const { isLoading, me } = useAuth();
  const { theme } = useTheme();

  useEffect(() => {
    me();
  }, [me]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <RouterProvider router={router} />

      <Toaster
        richColors
        closeButton
        theme={theme as Theme}
        toastOptions={toastOptions}
      />
    </>
  );
};
