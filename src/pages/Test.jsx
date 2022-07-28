import { Button } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import React, { useEffect, useState } from "react";
import { Question } from "../components/Question";
import { getWords } from "../services/services";
import "../styles/test.css";
// import axios from "axios";

export const Test = () => {
  const [words, setWords] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchWords();
  }, []);
  const fetchWords = async () => {
    const results = await getWords();
    console.log(words);
    setWords(results.data);
    console.log(words);
  };
  const handleUpdateIndex = () => {
    if (index >= 0 && index < 9) {
      setIndex(index + 1);
    }
  };
  return (
    <div className="test">
      <div className="progress">
        <LinearProgress className="line" variant="determinate" value={10} />
      </div>

      <div className="questions">
        <Question question={words[index]}> </Question>
        <div className="next">
          <Button onClick={() => handleUpdateIndex()} variant="contained">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
