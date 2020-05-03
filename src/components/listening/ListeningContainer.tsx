import * as React from "react";
import { Fragment, useState, useContext } from "react";
import ListeningPractice from "./ListeningPractice";
import ListeningOptions from "./ListeningOptions";
import { AppStateContext } from "../../context/appStateContext";

export interface ListeningOptionsProps {}

const ListeningContainer: React.SFC<ListeningOptionsProps> = () => {
  const [practiceStarted, setPracticeStarted] = useState(false);
  const { state } = useContext(AppStateContext);

  const renderView = () => {
    if (state.hasPracticeStarted) {
      return <ListeningPractice />;
    } else {
      return <ListeningOptions setPracticeStarted={setPracticeStarted} />;
    }
  };
  return <Fragment> {renderView()}</Fragment>;
};

export default ListeningContainer;
