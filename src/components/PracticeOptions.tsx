import * as React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/context";
import ListeningContainer from "./listening/ListeningContainer";
import ChordChangeOptions from "./ChordChangeOptions";
import "./styles/practiceOptions.css";
export interface PracticeOptionsProps {}

const PracticeOptions: React.SFC<PracticeOptionsProps> = () => {
  const { curView } = useContext(ThemeContext);
  const renderView = () => {
    switch (curView) {
      case "listening": {
        return <ListeningContainer />;
      }
      case "chordChanges": {
        return <ChordChangeOptions />;
      }
      default:
        return "wrong view";
    }
  };
  return <div className="mainContainer">{renderView()}</div>;
};

export default PracticeOptions;
