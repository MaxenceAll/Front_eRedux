import styled, { keyframes } from "styled-components";

export const STYLEDContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  min-height: 250px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  padding: 2%;
  text-align: center;
`;

const appearAnimation = keyframes`
  from {
    transform: scale(0%);
  }
  to {
    transform: scale(100%);
  }
`;

export const STYLEDContainerBox = styled.div`
  width: 90%;
  max-width: 1000px;
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(1px);
  border: 1px solid black;
  padding: 2%;
  animation: ${appearAnimation} 0.5s linear;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
`;
