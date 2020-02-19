import * as React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context";
import ListeningOptions from "./ListeningOptions";
import ChordChangeOptions from "./ChordChangeOptions";
export interface PracticeOptionsProps {}

const PracticeOptions: React.SFC<PracticeOptionsProps> = () => {
  const { curView } = useContext(ThemeContext);
  const renderView = () => {
    switch (curView) {
      case "listening": {
        return <ListeningOptions />;
      }
      case "chordChanges": {
        return <ChordChangeOptions />;
      }
      default:
        return "wrong view";
    }
  };
  return <div>{renderView()}</div>;
};

export default PracticeOptions;
