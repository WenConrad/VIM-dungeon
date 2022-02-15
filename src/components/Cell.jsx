import React from "react";
import styled from "styled-components";

  const CellWrapper = styled.div`
    margin: 0px;
    width: 64px;
    height: 64px;
    text-align: center;
    padding: 0px;
    background-color: grey;
    color: white;
    box-shadow: inset 0 0 3px black;
  `;

export const Cell = (props) => {

  return (
    <CellWrapper>
      {props.id}
    </CellWrapper>
  )
}