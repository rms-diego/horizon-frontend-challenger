import React from "react";
import ReactDOM from "react-dom/client";

import { AppRoutes } from "./Routes";
import { BrowserRouter } from "react-router-dom";

import "./styles/globalStyles.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
