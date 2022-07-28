import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/rank.css";
export const Rank = () => {
  const [rank, setRank] = useState(80);

  return (
    <div className="rankBox">
      <h1>Your rank: {rank}</h1>
      <h4> wow, congrats</h4>

      <Link to="/">
        <Button color="secondary" variant="contained">
          Try Again
        </Button>
      </Link>
    </div>
  );
};
