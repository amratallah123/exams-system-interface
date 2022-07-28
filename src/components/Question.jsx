import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import "../styles/question.css";
export const Question = (props) => {
  return (
    <div className="questionBox">
      <div className="question">
        <h1>{props.question ? props.question : "hello"}</h1>
      </div>
      <form className="answers">
        <FormLabel id="demo-radio-buttons-group-label">Speech part</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            className="answer"
            value="noun"
            control={<Radio />}
            label="noun"
          />
          <FormControlLabel
            className="answer"
            value="verb"
            control={<Radio />}
            label="verb"
          />

          <FormControlLabel
            className="answer"
            value="adjective"
            control={<Radio />}
            label="adjective"
          />
          <FormControlLabel
            className="answer"
            value="adverb"
            control={<Radio />}
            label="adverb"
          />
        </RadioGroup>
      </form>
      <div className="next">
        <Button variant="contained">Next</Button>
      </div>
    </div>
  );
};
