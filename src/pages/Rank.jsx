import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import { postScoreAndGetRank } from "../services/services";
import { useSelector } from "react-redux";

import "../styles/rank.css";
export const Rank = () => {
  const [rank, setRank] = useState(0);
  const score = useSelector((state) => state.score.score);

  // fetching the rank
  const getRank = async () => {
    const results = await postScoreAndGetRank(score);
    console.log(rank);
    setRank(results.data);
    console.log(rank);
  };

  useEffect(() => {
    getRank();
  }, []);

  return (
    <div className="rankBox">
      <h1 className="rank"> {rank.rank}</h1>
      <h2>Your rank</h2>
      {rank.rank >= 40 ? (
        <h4>Well done &#128079;! </h4>
      ) : (
        <h4> Try harder &#128531; </h4>
      )}
      <a href="/">
        <Button
          sx={{ bgcolor: "#076585", fontWeight: "light" }}
          variant="contained"
        >
          Try Again
        </Button>
      </a>
    </div>
  );
};
