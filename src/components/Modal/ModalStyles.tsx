import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import * as colors from "../../assets/scss/colors";

const showAnimation = keyframes `
  0% { transform: scale(.2); }
  100% { transform: scale(1); }
`;

const hideAnimation = keyframes `
  0% { transform: scale(1); }
  100% { transform: scale(.2); }
`;


export const ModalWrapper = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  background-color: rgba(0, 0, 0, .3);
  transition: all .3s;
`;

export const ModalContainer = styled.div `
  .modal-container {
    min-width: 500px;
    min-height: 300px;
    background-color: #FFF;
    border-radius: 8px;
    box-shadow:
      0 3px 6px -4px #0000001f,
      0 6px 16px #00000014,
      0 9px 28px 8px #0000000d;
  
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    transition: all .3s;
    animation: ${showAnimation} .2s forwards;
  }

  .modal-container_close {
    animation: ${hideAnimation} .2s forwards;
  }
`;

export const ModalContainerTitle = styled.div `
  padding: 15px;
  border-bottom: 1px solid ${colors.disabled05};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalContainerTitleCloseIcon = styled.span `
  width: 22px;
  height: 22px;
  opacity: .5;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ModalContainerFooter = styled.div `
  padding: 15px;
  border-top: 1px solid ${colors.disabled05};

  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 16px;
  align-items: center;
  justify-content: flex-end;
`;

export const ModalContainerBody = styled.div `
  padding: 20px 10px;
  flex: 1 1 auto;
`;

