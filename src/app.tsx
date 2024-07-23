import { Toaster } from "sonner";
import { useTheme } from "next-themes";
import { RouterProvider } from "react-router-dom";

import { Theme } from "@/types";
import { router } from "@/data/router";
import { toastOptions } from "@/utils/toast";

export const App = () => {
  const { theme } = useTheme();

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
