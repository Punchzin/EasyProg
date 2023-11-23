import React from "react";
import ReactDOM from "react-dom/client";
import "./global/styles.global.css";
import "remixicon/fonts/remixicon.css";
import RoutesApp from "./routes/routes";
import Providers from "./providers";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Providers>
      <RoutesApp />
    </Providers>
  </React.StrictMode>
);
