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
        <h1>{props.question ? props.question.word : "hello"}</h1>
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
        <div className="submit">
          <h5>
            your answer is: 
          </h5>
          <Button variant="contained">submit</Button>
        </div>
      </form>
    </div>
  );
};
