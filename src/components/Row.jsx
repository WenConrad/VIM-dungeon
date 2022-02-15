import React from "react";
import styled from "styled-components";
import { Cell } from "./Cell";

const RowWrapper = styled.div`
  display: flex;
  flex-direction: inline;
  justify-content: center;
`;

export const Row = (props) => {
  return (
    <RowWrapper>
      {props.data.map((cell, index) => <Cell key={index} cell={cell} />)}
    </RowWrapper>
  )
}