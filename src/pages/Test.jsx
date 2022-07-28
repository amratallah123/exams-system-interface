import LinearProgress from "@mui/material/LinearProgress";
import React, { useEffect, useState } from "react";
import { Question } from "../components/Question";
import "../styles/test.css";
// import axios from "axios";

export const Test = () => {
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
