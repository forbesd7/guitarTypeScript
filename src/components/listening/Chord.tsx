import React, { Fragment, useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";

export interface ChordProps {
  chordName: string;
  addChordToPractice: (chordName: string) => void;
}

const Chord: React.SFC<ChordProps> = ({ chordName, addChordToPractice }) => {
  return (
    <Grid item>
      <Button
        onClick={() => {
          addChordToPractice(chordName);
        }}
      >
        {chordName}
      </Button>
    </Grid>
  );
};

export default Chord;
