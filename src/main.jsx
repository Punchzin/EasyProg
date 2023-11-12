import React from "react";
import ReactDOM from "react-dom/client";
import "./global/styles.global.css";
import "remixicon/fonts/remixicon.css";
import RoutesApp from "./routes/routes";
import { AuthProvider } from "./contexts/Auth";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
