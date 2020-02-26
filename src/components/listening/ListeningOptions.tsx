import * as React from "react";
import { useState, Fragment } from "react";
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
export interface ListeningOptionsProps {}

const ListeningOptions: React.SFC<ListeningOptionsProps> = () => {
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
};

export default ListeningOptions;
