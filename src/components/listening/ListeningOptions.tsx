import * as React from "react";
import { useState, Fragment, useContext } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography
} from "@material-ui/core";
import { AppContext } from "../../context/context";
import { ListeningContext } from "../../context/listeningContext";
export interface ListeningOptionsProps {
  setPracticeStarted: React.Dispatch<React.SetStateAction<boolean>>;
}

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      width: 200
    }
  })
);

const ListeningOptions: React.SFC<ListeningOptionsProps> = () => {
  const { setState, state } = useContext(AppContext);
  const { listeningOptions, setListeningOptions } = useContext(
    ListeningContext
  );
  const [chordType, setChordType] = useState("Major");

  const classes = useStyles();

  const selectPracticeTime = (event: React.ChangeEvent<{ value: unknown }>) => {
    setListeningOptions({
      ...listeningOptions,
      practiceTime: event.target.value as number
    });
    console.log(listeningOptions);
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
        <Button
          onClick={() => {
            setState({ ...state, hasPracticeStarted: true });
          }}
        >
          Start
        </Button>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="chord-type">Chord Type</InputLabel>
        <Select
          labelId="chord-type"
          value={chordType}
          onChange={selectPracticeTime}
        >
          <MenuItem value={60}>One Minute</MenuItem>
          <MenuItem value={180}>Three Minutes</MenuItem>
          <MenuItem value={300}>Five Minutes</MenuItem>
        </Select>
      </FormControl>
    </Fragment>
  );
};

export default ListeningOptions;
