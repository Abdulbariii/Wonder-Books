import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextTheme } from "./components/Themes/ContextTheme";
import AuthContext from "./context/AuthContext";
import AddCart from "./context/AddCart";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AddCart>
        <ContextTheme>
          <AuthContext>
            <App />
          </AuthContext>
        </ContextTheme>
      </AddCart>
    </BrowserRouter>
  </React.StrictMode>
);
