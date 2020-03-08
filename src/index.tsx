import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "./context/context";
import { AppContextProvider } from "./context/context";
import { ListeningContextProvider } from "./context/listeningContext";

ReactDOM.render(
  <ThemeContextProvider>
    <AppContextProvider>
      <ListeningContextProvider>
        <App />
      </ListeningContextProvider>
    </AppContextProvider>
  </ThemeContextProvider>,
  document.getElementById("root")
);
