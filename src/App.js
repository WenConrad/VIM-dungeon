import "./App.css";
import React from "react";
import { Grid } from "./components/Grid";

const gameStage = [
  ["1", "2", "3", "4", "5", "6", "7", "8"],
  ["1", "2", "3", "4", "5", "6", "7", "8"],
  ["1", "2", "3", "4", "5", "6", "7", "8"],
  ["1", "2", "3", "4", "5", "6", "7", "8"],
  ["1", "2", "3", "4", "5", "6", "7", "8"],
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>VIM Dungeon</div>
      </header>
      <Grid gameStage={gameStage} />
    </div>
  );
}

export default App;
