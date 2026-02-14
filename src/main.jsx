import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import { GlobalContextProvider } from "./Contexts/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContextProvider>
    <App />
    </GlobalContextProvider>
  </React.StrictMode>,
);
