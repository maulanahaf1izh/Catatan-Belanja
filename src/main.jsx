import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./style/reset.css";
import "./style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
