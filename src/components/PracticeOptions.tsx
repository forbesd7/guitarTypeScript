import * as React from "react";
import { useContext } from "react";
import { AppStateContext } from "../context/appStateContext";
import ListeningContainer from "./listening/ListeningContainer";
import ChordChangeOptions from "./ChordChangeOptions";
import "./styles/practiceOptions.css";
export interface PracticeOptionsProps {}

const PracticeOptions: React.SFC<PracticeOptionsProps> = () => {
  const { state } = useContext(AppStateContext);
  const renderView = () => {
    switch (state.curView) {
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
