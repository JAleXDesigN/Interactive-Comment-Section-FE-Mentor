import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "react-toastify/dist/ReactToastify.min.css";
import App from "./App";
import { ThemeProvider } from "./theme/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
