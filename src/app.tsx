import { RouterProvider } from "react-router-dom";
import { router } from "./data/router";

export const App = () => {
  return <RouterProvider router={router} />;
};
