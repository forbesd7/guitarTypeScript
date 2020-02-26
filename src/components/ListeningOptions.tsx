import * as React from "react";
import { Fragment, useState } from "react";
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
import { createStyles, makeStyles } from "@material-ui/core/styles";
export interface ListeningOptionsProps {}

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: 120,
      maxWidth: 300
    }
  })
);
const ListeningOptions: React.SFC<ListeningOptionsProps> = () => {
  const classes = useStyles();
  const [practiceTime, setPracticeTime] = useState(0);
  const [practiceStarted, setPracticeStarted] = useState(false);
  const selectPracticeTime = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPracticeTime(event.target.value as number);
    console.log(practiceTime);
  };

  const startPractice = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setPracticeStarted(true);
  };

  const renderView = () => {
    if (practiceStarted) {
      return <div>PRACTICE</div>;
    } else {
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
            <Button onClick={startPractice}>Start</Button>
          </FormControl>
        </Fragment>
      );
    }
  };
  return <Fragment> {renderView()}</Fragment>;
};

export default ListeningOptions;
