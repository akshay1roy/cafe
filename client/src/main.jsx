import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CafeAppContextProvider from "./context/CafeAppContext.jsx";
// import { DriverContextProvider } from "./context/DriverContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CafeAppContextProvider>
        <App />
    </CafeAppContextProvider>
  </StrictMode>
);
