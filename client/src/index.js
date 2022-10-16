import React from "react";
import ReactDOM from "react-dom/client";

// Style imports
import "./styles/html.css";
import "./styles/app.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
