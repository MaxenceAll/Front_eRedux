import styled from "styled-components";

export const STYLEDInput = styled.input`
  width: ${props => props.width || ""};
  height: ${props => props.height || ""};
  color: black;
  background-color: white;
  &:hover {
    color: black;
    background-color: white;
  }
  &:read-only {
    cursor: not-allowed;
    background-color: gray;
    color: white;
  }
`;

