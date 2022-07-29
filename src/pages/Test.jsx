import { Button } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import React, { useEffect, useState } from "react";
import { Question } from "../components/Question";
import { getWords } from "../services/services";
import "../styles/test.css";
import { useSelector } from "react-redux";

export const Test = () => {
  const [words, setWords] = useState([]);
  const index = useSelector((state) => state.index.index);
  const fetchWords = async () => {
    const results = await getWords();
    setWords(results.data);
    console.log(words);
  };
  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <div className="test">
      <div className="progress">
        <LinearProgress
          className="line"
          variant="determinate"
          value={index * 10}
        />
      </div>

      <div className="questions">
        <Question question={words}> </Question>
      </div>
    </div>
  );
};
