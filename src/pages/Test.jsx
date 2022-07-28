import LinearProgress from "@mui/material/LinearProgress";
import React, { useEffect, useState } from "react";
import { Question } from "../components/Question";
import { getWords } from "../services/services";
import "../styles/test.css";
// import axios from "axios";

export const Test = () => {
  const [words, setWords] = useState([]);
  useEffect(() => {
    const fetchWords = async () => {
      const results = await getWords();
      console.log(words);
      setWords(results.data);
      console.log(words);
    };
    fetchWords();
  });

  return (
    <div className="test">
      <div className="progress">
        <LinearProgress className="line" variant="determinate" value={10} />
      </div>

      <div className="questions">
        <Question> </Question>
      </div>
    </div>
  );
};
