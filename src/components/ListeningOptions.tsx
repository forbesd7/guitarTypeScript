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
  const selectPracticeTime = (event: React.ChangeEvent<{ value: unknown }>) => {
    setPracticeTime(event.target.value as number);
    console.log(practiceTime);
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
        <Button>Start</Button>
      </FormControl>
    </Fragment>
  );
};

export default ListeningOptions;
