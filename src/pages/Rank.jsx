import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { postScoreAndGetRank } from "../services/services";
import { useSelector } from "react-redux";

import "../styles/rank.css";
export const Rank = () => {
  const [rank, setRank] = useState(0);
  const score = useSelector((state) => state.score.score);

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
      <h1>Your rank: {rank.rank}</h1>
      <h4>
        {rank.rank >= 40
          ? "WOW, Congratulations!"
          : "Oh, sorry do all yor best"}
      </h4>

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
