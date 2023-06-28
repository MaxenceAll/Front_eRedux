import styled from "styled-components";

export const STYLEDButton = styled.button`
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  border-radius: 10px;
  color: white;
  background-color: black;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    color: black;
    background-color: white;

    transform: translateY(-3px);
    box-shadow: 0 6px 4px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: gray;
    color: white;
  }
`;
