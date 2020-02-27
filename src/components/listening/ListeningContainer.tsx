import * as React from "react";
import { Fragment, useState } from "react";
import ListeningPractice from "./ListeningPractice";
import ListeningOptions from "./ListeningOptions";
export interface ListeningOptionsProps {}

const ListeningContainer: React.SFC<ListeningOptionsProps> = () => {
  const [practiceStarted, setPracticeStarted] = useState(false);

  const renderView = () => {
    if (practiceStarted) {
      return <ListeningPractice />;
    } else {
      return <ListeningOptions setPracticeStarted={setPracticeStarted} />;
    }
  };
  return <Fragment> {renderView()}</Fragment>;
};

export default ListeningContainer;
