import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

//Wenn fertiges Produkt testen:
/*
npm run build 
npm run preview mit local ("mock") server
*/
