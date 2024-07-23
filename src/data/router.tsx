import { HomePage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

type Router = ReturnType<typeof createBrowserRouter>;

export const router: Router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <HomePage />,
  },
]);
