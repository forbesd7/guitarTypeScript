import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppStateContextProvider } from "./context/appStateContext";
import { ListeningContextProvider } from "./context/listeningContext";

ReactDOM.render(
  <AppStateContextProvider>
    <ListeningContextProvider>
      <App />
    </ListeningContextProvider>
  </AppStateContextProvider>,
  document.getElementById("root")
);
