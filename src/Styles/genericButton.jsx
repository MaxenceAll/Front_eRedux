import { styled } from "styled-components";

export const STYLEDButton = styled.button`
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  border-radius: 10px;

  border: none;
  padding: 10px 20px;
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
  background: rgba(255, 165, 0, 0.7);
    box-shadow: 0 6px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    transform: translateY(-3px);
  }

  &:disabled {
    cursor: not-allowed;
    background: rgba(128, 128, 128, 0.3);
    color: rgba(255, 255, 255, 0.6);
  }
`;
