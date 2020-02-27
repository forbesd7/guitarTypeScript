import React from "react";
import ReactDOM from "react-dom";
import ListeningContainer from "../listening/ListeningContainer";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListeningContainer />, div);
});
