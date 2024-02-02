import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./CSS/general.css";
import "./CSS/header.css";
import "./CSS/cta-section.css";
import "./CSS/section-1.css";
import "./CSS/section-2.css";
import "./CSS/section-3.css";
import "./CSS/section-4.css";
import "./CSS/certificates-section.css";
import "./CSS/footer.css";

import { register } from "swiper/element/bundle";
register();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
