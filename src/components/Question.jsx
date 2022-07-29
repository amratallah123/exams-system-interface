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
import { Link } from "react-router-dom";

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

  const handleSubmit = (event) => {
    const currentInedex = index;
    if (currentInedex >= 0 && currentInedex <= 9 && props.question[index]) {
      dispatch(incrementIndex());
    } else {
      dispatch(clearIndex());
      dispatch(clearScore());
    }

    if (value === props.question[currentInedex]?.pos) {
      setHelperText("You got it!");
      dispatch(incrementScore());
      setValue("");
      console.log(props.question[currentInedex]?.pos);
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
          <h2>
            The Word is :{" "}
            {props.question[index] ? props.question[index]?.word : ""}
          </h2>
        </div>
        <FormControl sx={{ m: 3 }} error={error} variant="standard">
          <FormLabel id="demo-error-radios">Speech part quiz: ... </FormLabel>
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
          <h3>your score {score}</h3>
        </FormControl>
      </div>
      <div className="submitBox">
        {index <= 9 ? (
          <Button
            variant="outlined"
            sx={{ color: "#fff", borderColor: "#fff" }}
            className="submit"
            onClick={() => handleSubmit()}
          >
            Check Answer
          </Button>
        ) : (
          <Link to="/rank">
            <Button
              variant="contained"
              sx={{ color: "#fff", bgcolor: "#076585" }}
              className="submit"
            >
              Submit
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
