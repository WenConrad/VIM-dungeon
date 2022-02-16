import React from "react";
import styled from "styled-components";
import { Row } from "./Row";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(20, auto);
  justify-content: center;
`;

export const Grid = (props) => {
  const gridRows = [];
  let cursor = props.gameState;

  for (let i = 0; i < 12; i++) {
    let rowData = props.stageData[i + 1] ? props.stageData[i + 1] : null;
    let cursorPosition = cursor[1] === i + 1 ? cursor : null;
    gridRows.push(<Row key={i} id={i + 1} rowData={rowData} cursor={cursorPosition} />)
  }

  return (
    <GridContainer>
      {gridRows}
    </GridContainer>
  )
}