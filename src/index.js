import React from "react";
import App from "./App.js";
import "./css/style.css";
import "./css/header.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/hero.css";
import "./css/project-section.css";
import "./css/grid.css";
import "./css/prologue-section.css";
import "./css/about-section.css";
import "./css/modal.css";
import "./css/botton.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
