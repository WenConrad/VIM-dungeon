import "./App.css";
import React from "react";
import { Grid } from "./components/Grid";

const stageData = {
  1: "WELCOME",
  2: "TO",
  3: "VIM-DUNGEON",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>VIM Dungeon</div>
      </header>
      <Grid stageData={stageData} />
    </div>
  );
}

export default App;
