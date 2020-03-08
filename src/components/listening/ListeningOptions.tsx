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
      minWidth: 120,
      maxWidth: 300
    }
  })
);

const ListeningOptions: React.SFC<ListeningOptionsProps> = () => {
  const { setState, state } = useContext(AppContext);
  const { listeningOptions, setListeningOptions } = useContext(
    ListeningContext
  );
  const classes = useStyles();
  const [practiceTime, setPracticeTime] = useState(0);

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
    </Fragment>
  );
};

export default ListeningOptions;
