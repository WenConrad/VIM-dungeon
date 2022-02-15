import React from "react";
import { Row } from "./Row";

export const Grid = (props) => {
  return (
    <div className="game-grid">
      {props.gameStage.map((data, index) => <Row key={index} data={data} />)}
    </div>
  )
}