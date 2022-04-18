import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import * as colors from "../../assets/scss/colors";


const textAnimation = keyframes `
  0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
    0 0 4px #fff,
    0 0 10px #fff,
    0 0 18px #fff,
    0 0 38px #f09,
    0 0 73px #f09,
    0 0 80px #f09,
    0 0 94px #f09,
    0 0 140px #f09;

  }

  20%, 24%, 55% {        
    text-shadow: none;
  }    
`;

export const GameWrapperStyled = styled.div `
  width: 900px;
  height: 600px;
  border: 2px solid ${colors.base04};
  padding: 10px 40px;
  box-shadow: 0px -1px 18px 6px #1f64ff;
  position: relative;
`;

export const GameControls = styled.div `
  margin: 40px 0;
  display: flex;
  justify-content: space-between;
  width: 900px;
`;

export const GameSingleControl = styled.button `
  font-size: 18px;
  color: #FFF;
  text-shadow:
    0 0 4px #fff,
    0 0 11px #fff,
    0 0 19px #fff,
    0 0 40px #f09,
    0 0 80px #f09,
    0 0 90px #f09,
    0 0 100px #f09,
    0 0 150px #f09;
`;

export const GameSingleControlWrapper = styled.div `
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;
`;

export const GameCaretStyled = styled.div `
  width: 8px;
  height: 120px;
  background-color: #fff;
  box-shadow: 0px -1px 10px 3px ${colors.error};
  position: absolute;
`;


export const GameBallStyled = styled.div `
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px -1px 10px 3px ${colors.success06};
`;

export const PlayingFieldStyled = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  color: #FFF;
  background: rgba(0, 0, 0, .4);

  z-index: 4;
`;

export const ScoreBox = styled.div `
position: absolute;
top: 20px;
left: 0;
width: 100%;

text-align: center;
font-size: 24px;

z-index: 5;

color: #fff;
animation: ${textAnimation} 1.5s infinite alternate;
text-shadow:
  0 0 4px #fff,
  0 0 11px #fff,
  0 0 19px #fff,
  0 0 40px #f09,
  0 0 80px #f09,
  0 0 90px #f09,
  0 0 100px #f09,
  0 0 150px #f09;
`;

export const GameActionsLogs = styled.li `
  color: #fff;
  margin-top: 20px;
  list-style: none;

  font-size: 14px;
`;
