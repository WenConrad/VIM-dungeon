import "./App.css";
import React, { useState, useCallback } from "react";
import { Grid } from "./components/Grid";

const stageData = {
  1: "WELCOME TO",
  2: "VIM-DUNGEON",
};

function App() {
  const [cursor, setCursor] = useState([1, 1]);

  const movement = {
    h: [-1, 0],
    j: [0, 1],
    k: [0, -1],
    l: [+1, 0],
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (!movement[e.key]) {
        return;
      }
      let move = movement[e.key];
      setCursor((prev) => [
        prev[0] + move[0] >= 1 && prev[0] + move[0] <= 20
          ? prev[0] + move[0]
          : prev[0],
        prev[1] + move[1] >= 1 && prev[1] + move[1] <= 12
          ? prev[1] + move[1]
          : prev[1],
      ]);
    },
    [movement]
  );

  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    console.log(cursor);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, cursor]);

  return (
    <div className="App">
      <header className="App-header">
        <div>VIM Dungeon</div>
      </header>
      <Grid stageData={stageData} gameState={cursor} />
    </div>
  );
}

export default App;
