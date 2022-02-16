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
  let { cursor } = props;

  for (let i = 0; i < 20; i++) {
    let cellData = (props.rowData && props.rowData[i]) ? props.rowData[i] : null;
    let cursorPosition = cursor && cursor[0] === i + 1 ? cursor : null;
    rowCells.push(<Cell key={i} id={String.fromCharCode(65 + i)+props.id} cellData={cellData} cursor={cursorPosition} />)
  }

  return (
    <RowWrapper>
      {rowCells}
    </RowWrapper>
  )
}
