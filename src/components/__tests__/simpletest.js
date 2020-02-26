import React from "react";
import ReactDOM from "react-dom";
import ListeningOptions from "../ListeningOptions";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListeningOptions />, div);
});
