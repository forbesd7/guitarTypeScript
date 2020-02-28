import * as React from "react";
import { useState, Fragment, useContext } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
  Paper,
  Typography
} from "@material-ui/core";
import { AppContext } from "../../context";
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

const ListeningOptions: React.SFC<ListeningOptionsProps> = ({
  setPracticeStarted
}) => {
  const { setState, state } = useContext(AppContext);
  const classes = useStyles();
  const [practiceTime, setPracticeTime] = useState(0);

  const selectPracticeTime = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPracticeTime(event.target.value as number);
    console.log(state);
  };

  return (
    <Fragment>
      <Typography>Select Your Listening Options</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel id="practice-time">Practice Time</InputLabel>
        <Select
          labelId="practice-time"
          value={practiceTime}
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
