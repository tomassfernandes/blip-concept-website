import React from "react";
import ReactDOM from "react-dom/client";

import HomePage from "./HomePage";

import "./CSS/general.css";
import "./CSS/header.css";
import "./CSS/cta-section.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
