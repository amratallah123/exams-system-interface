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
import { useSelector, useDispatch } from "react-redux";
import { incrementIndex, clearIndex } from "../redux/indexSlicer";
import { incrementScore, clearScore } from "../redux/scoreSlicer";

export const Question = (props) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const [helperText, setHelperText] = useState("Choose wisely");

  const dispatch = useDispatch();
  const index = useSelector((state) => state.index.index);
  const score = useSelector((state) => state.score.score);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleUpdateIndex = () => {
    if (index >= 0 && index <= 9) {
      dispatch(incrementIndex());
    } else {
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === props.question[index].pos) {
      setHelperText("You got it!");
      dispatch(incrementScore());
      setValue("");

      setError(false);
    } else if (value === "") {
      setHelperText("Please select an option.");
      setError(true);
      setValue("");
    } else {
      setHelperText("Sorry, wrong answer!");
      setError(true);
      setValue("");
    }
  };
  return (
    <div className="container">
      <div className="questionBox">
        <div className="question">
          <h1>
            {props.question[index] ? props.question[index].word : "hello"}
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <FormControl sx={{ m: 3 }} error={error} variant="standard">
            <FormLabel id="demo-error-radios">
              Speech part quiz:{" "}
              {props.question[index] ? props.question[index].word : "hello"}
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
            <FormHelperText>{score}</FormHelperText>
            <Button
              sx={{ mt: 1, mr: 1 }}
              type="submit"
              variant="outlined"
              className="submit"
              onClick={() => handleUpdateIndex()}
            >
              Check Answer
            </Button>
          </FormControl>
        </form>
      </div>
    </div>
  );
};
