import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import "./index.css";
import ParticlesBg from "./config/particles-config.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ParticlesBg />
  </StrictMode>
);
