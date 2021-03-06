/** @jsxImportSource @emotion/react */
import { DetailedHTMLProps, HTMLAttributes } from "react";
import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";


const ChatInputStyles = styled.div `
  border-radius: 8px;
  background-color: ${colors.disabled03};
  padding: 20px;
  flex: 0 0 auto;
  width: 100%;
  position: relative;
`;
ChatInputStyles.displayName = "ChatInputStyles";

export const ChatControls = styled.div `
  border-bottom: 1px solid ${colors.white04};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 20px;
`;
ChatControls.displayName = "ChatControls";

interface InterfaceChatControlIconComponents extends
DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  active?: boolean;
}

const ChatControlIconComponents = ({ children, ...rest }: InterfaceChatControlIconComponents) => {
  return (<span { ...rest }>{ children }</span>);
};

export const ChatControlIcon = styled(ChatControlIconComponents) `
  color: ${(props: InterfaceChatControlIconComponents) => props.active ? colors.base04 : colors.black};
  font-size: 16px;
  line-height: 18px;
  margin: 0 5px;
  cursor: pointer;
  opacity: ${(props: InterfaceChatControlIconComponents) => props.active ? "1" : "0.5"};
  transition: all .2s;

  &:hover {
    opacity: 1;
  }
`;
ChatInputStyles.displayName = "ChatInputStyles";

export const ChatSendButton = styled.span `
  color: ${colors.white04};
  background-color: ${colors.base04};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
  opacity: .6;
  transition: all .2s;
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 4;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 18px;
    height: 18px;
    margin-left: 4px;
    transform: rotate(260deg);
  }
`;
ChatSendButton.displayName = "ChatSendButton";

export default ChatInputStyles;
