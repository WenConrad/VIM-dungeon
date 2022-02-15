import React from "react";
import styled from "styled-components";

const CellWrapper = styled.div`
  margin: 0px;
  width: 64px;
  height: 64px;
  line-height: 64px;
  text-align: center;
  padding: 0px;
  background-color: grey;
  color: white;
  box-shadow: inset 0 0 2px 1px dimgrey;
`;

export const Cell = (props) => {

  return (
    <CellWrapper>
      {props.cellData}
    </CellWrapper>
  )
}