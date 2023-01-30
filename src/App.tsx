import CounterMainLayout from "./Counter";
import React from "react";
import Reset from "./Reset";
import { Paper } from "@mui/material";
import "./index.css";

const App = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="main">
      <Paper className="paper" elevation={3}>
        <div className="btn-group">
          <CounterMainLayout
            count={count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
          <Reset handleReset={handleReset} />
        </div>
      </Paper>
    </div>
  );
};

export default App;
