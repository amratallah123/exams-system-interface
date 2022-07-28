import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { postScoreAndGetRank } from "../services/services";
import "../styles/rank.css";
export const Rank = () => {
  const [rank, setRank] = useState(0);
  useEffect(() => {
    getRank();
  }, []);
  const getRank = async () => {
    const results = await postScoreAndGetRank(90);
    console.log(rank);
    setRank(results.data);
    console.log(rank);
  };
  return (
    <div className="rankBox">
      <h1>Your rank: {rank.rank}</h1>
      <h4> wow, congrats</h4>

      <Link to="/">
        <Button color="secondary" variant="contained">
          Try Again
        </Button>
      </Link>
    </div>
  );
};
