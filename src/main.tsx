import ReactDOM from "react-dom/client";

import "./index.css";
import { App } from "./app";
import { ThemeProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
