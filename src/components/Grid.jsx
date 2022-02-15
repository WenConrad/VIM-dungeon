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

  for (let i = 0; i < 12; i++) {
    let rowData = props.stageData[i + 1] ? props.stageData[i + 1] : null;
    gridRows.push(<Row key={i} id={i + 1} rowData={rowData}/>)
  }

  return (
    <GridContainer>
      {gridRows}
    </GridContainer>
  )
}