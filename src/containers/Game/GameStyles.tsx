import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";


export const GameWrapperStyled = styled.div `
  width: 100%;
  height: 600px;
  border: 2px solid ${colors.base04};
  padding: 10px 40px;
  box-shadow: 0px -1px 18px 6px #1f64ff;
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
  position: relative;
`;
