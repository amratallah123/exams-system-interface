import LinearProgress from "@mui/material/LinearProgress";
import React, { useEffect, useState } from "react";
import { Question } from "./Question";
import "../styles/test.css";
import { getWords } from "../services/services";
// import axios from "axios";

export const Test = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getWords;
        setData(response.data);
      } catch (error) {
        throw error;
      }
    })();
  }, []);
  return (
    <div className="test">
      <div className="progress">
        <LinearProgress className="line" variant="determinate" value={10} />
      </div>

      <div className="questions">
        <Question></Question>
      </div>
    </div>
  );
};
