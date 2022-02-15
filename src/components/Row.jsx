import React from "react";
import styled from "styled-components";
import { Cell } from "./Cell";

const RowWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 21;
  display: contents;
  margin: 0;
`;

export const Row = (props) => {
  const rowCells = [];

  for (let i = 0; i < 20; i++) {
    rowCells.push(<Cell key={i} id={String.fromCharCode(65 + i)+props.id} />)
  }

  return (
    <RowWrapper>
      {rowCells}
    </RowWrapper>
  )
}
