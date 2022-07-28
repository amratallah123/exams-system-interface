import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import "../styles/question.css";
import * as React from "react";
export const Question = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState("Choose wisely");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === props.question.pos) {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "") {
      setHelperText("Please select an option.");
      setError(true);
    } else {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    }
  };
  const isSubmitted = () => {};
  return (
    <div className="questionBox">
      <div className="question">
        <h1>{props.question ? props.question.word : "hello"}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 3 }} error={error} variant="standard">
          <FormLabel id="demo-error-radios">
            Speech part quiz: {props.question ? props.question.word : "hello"}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-error-radios"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="noun" control={<Radio />} label="noun" />
            <FormControlLabel value="verb" control={<Radio />} label="verb" />
            <FormControlLabel
              value="adverb"
              control={<Radio />}
              label="adverb"
            />
            <FormControlLabel
              value="adjective"
              control={<Radio />}
              label="adjective"
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <Button
            sx={{ mt: 1, mr: 1 }}
            type="submit"
            variant="outlined"
            className="submit"
          >
            Check Answer
          </Button>
        </FormControl>
      </form>
    </div>
  );
};
