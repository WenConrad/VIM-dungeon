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
  box-shadow: ${props => (props.inside) ? "inset 0 0 5px 5px dimgrey" : "inset 0 0 2px 1px dimgrey"};
  font-size: ${props => (props.inside) ? "45px" : "48px"};
`;

export const Cell = (props) => {

  return (
    <CellWrapper inside={props.cursor}>
      {props.cellData}
    </CellWrapper>
  )
}