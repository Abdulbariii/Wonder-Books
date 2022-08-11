import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextTheme } from "./components/Themes/ContextTheme";
import AuthContext from "./context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextTheme>
        <AuthContext>
          <App />
        </AuthContext>
      </ContextTheme>
    </BrowserRouter>
  </React.StrictMode>
);
