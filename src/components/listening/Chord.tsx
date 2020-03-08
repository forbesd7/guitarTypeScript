import React, { Fragment } from "react";
import { Button } from "@material-ui/core";

export interface ChordProps {
  name: string;
}

const Chord: React.SFC<ChordProps> = ({ name }) => {
  return (
    <Fragment>
      <Button>{name}</Button>
    </Fragment>
  );
};

export default Chord;
