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
    gridRows.push(<Row key={i} id={i + 1}/>)
  }

  return (
    <GridContainer>
      {gridRows}
    </GridContainer>
  )
}