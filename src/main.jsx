import React from "react";
import ReactDOM from "react-dom/client";
import "./global/styles.global.css";
import "remixicon/fonts/remixicon.css";
// import Authentication from "./pages/Authentication/Authentication";
//import Apresentation from './pages/Apresentation';
import RoutesApp from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  </React.StrictMode>
);
