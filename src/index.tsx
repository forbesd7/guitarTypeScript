import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "./context";
import { AppContextProvider } from "./context";

ReactDOM.render(
  <ThemeContextProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </ThemeContextProvider>,
  document.getElementById("root")
);
