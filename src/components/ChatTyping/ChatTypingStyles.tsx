import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import * as colors from "../../assets/scss/colors";

const dotElastic = keyframes `
  0% { opacity: .5; }
  50% { opacity: 1; }
  100% { opacity: .5; }
`;

const TypingStyled = styled.div `
  position: relative;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${colors.base04};
  animation: ${dotElastic} 1.2s infinite linear;
  animation-delay: 1s;
  margin-right: 15px;

  &::before, &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${colors.base04};
  }

  &::before {
    left: -8px;
    animation: ${dotElastic} 1.2s infinite linear;
    animation-delay: .5s;
  }

  &::after {
    left: 8px;
    animation: ${dotElastic} 1s infinite linear;
    animation-delay: 1.5s;
  }
`;

export const TypingWrapperStyled = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.base04};
`;
TypingWrapperStyled.displayName = "TypingWrapperStyled";

export default TypingStyled;
