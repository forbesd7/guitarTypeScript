import * as React from "react";
import { useState, Fragment, useContext } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Grid,
} from "@material-ui/core";
import { AppStateContext } from "../../context/appStateContext";
import { ListeningContext } from "../../context/listeningContext";
import Chord from "./Chord";
export interface ListeningOptionsProps {
  setPracticeStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const CHORD_TYPES = ["A", "B", "C", "D", "E", "F", "G"];

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      width: 150,
      margin: "10px",
    },
  })
);

const ListeningOptions: React.SFC<ListeningOptionsProps> = () => {
  const { setAppState, state } = useContext(AppStateContext);
  const { listeningOptions, setListeningOptions } = useContext(
    ListeningContext
  );
  const [chordType, setChordType] = useState("Major");

  const classes = useStyles();

  const selectPracticeTime = (event: React.ChangeEvent<{ value: unknown }>) => {
    setListeningOptions({
      ...listeningOptions,
      practiceTime: event.target.value as number,
    });
    console.log(listeningOptions);
  };

  const selectChordType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setChordType(event.target.value as string);
  };

  const addChordToPractice = (chord: string) => {
    let newChords = listeningOptions.practiceChords;

    if (!newChords.includes(chord)) {
      newChords.push(chord);
    } else {
      let chordIndex = newChords.indexOf(chord);
      newChords.splice(chordIndex, 1);
    }

    setListeningOptions({ ...listeningOptions, practiceChords: newChords });
    console.log(listeningOptions.practiceChords);
  };

  return (
    <Fragment>
      <Typography>Select Your Listening Options</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="practice-time">Practice Time</InputLabel>
        <Select
          labelId="practice-time"
          value={listeningOptions.practiceTime}
          onChange={selectPracticeTime}
        >
          <MenuItem value={60}>One Minute</MenuItem>
          <MenuItem value={180}>Three Minutes</MenuItem>
          <MenuItem value={300}>Five Minutes</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="chord-type">Chord Type</InputLabel>
        <Select
          labelId="chord-type"
          value={chordType}
          onChange={selectChordType}
        >
          <MenuItem value={"Major"}>Major</MenuItem>
          <MenuItem value={"Minor"}>Minor</MenuItem>
        </Select>
      </FormControl>
      <div>
        <Grid container>
          {CHORD_TYPES.map((chord) => {
            return (
              <Chord
                addChordToPractice={addChordToPractice}
                chordName={chord}
              />
            );
          })}
        </Grid>
      </div>
      <Button
        onClick={() => {
          setAppState({ ...state, hasPracticeStarted: true });
        }}
      >
        Start
      </Button>
    </Fragment>
  );
};

export default ListeningOptions;
