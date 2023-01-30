import React, { useState } from "react";
import { Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

import AddIcon from "@mui/icons-material/Add";

interface CounterProps {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export const CounterMainLayout: React.FC<CounterProps> = ({
  count,
  handleIncrement,
  handleDecrement,
}) => (
  <div>
    <h1>Current Count: {count}</h1>

    <Button className="add" onClick={handleIncrement} variant="outlined">
      <AddIcon></AddIcon>{" "}
    </Button>
    <Button className="delete" onClick={handleDecrement} variant="outlined">
      <RemoveIcon></RemoveIcon>
    </Button>
  </div>
);

export default CounterMainLayout;
