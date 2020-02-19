import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PracticeOptions from "./components/PracticeOptions";

const App = () => {
  return (
    <div>
      <Navbar text="hello" />
      <PracticeOptions />
    </div>
  );
};

export default App;
