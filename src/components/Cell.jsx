import React from "react";
import styled from "styled-components";

  const CellWrapper = styled.div`
    width: 1em;
    height: 1.2em;
    text-align: center;
    padding: 0.1em;
    margin: 0.03em;
    border-radius: 10%;
    background-color: grey;
    color: white;
  `;

export const Cell = (props) => {

  return (
    <CellWrapper>
      {props.cell}
    </CellWrapper>
  )
}