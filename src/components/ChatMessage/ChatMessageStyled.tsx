import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";

//component
import ChatMessage from "./ChatMessage";

export const ChatMessageContent = styled.div `
  padding: 10px;
  margin-bottom: 10px;
  display: inline-block;
  background-color: ${colors.disabled04};
  color: ${colors.black};
  border-radius: 8px 8px 8px 0;
`;
ChatMessageContent.displayName = "ChatMessageContent";

export const ChatMessageInfo = styled.div `
  color: ${colors.disabled04};
`;

const ChatMessageStyled = styled(ChatMessage) `
  margin: 20px 0;
  
  &:nth-child(even) {
    text-align: right;

    ${ChatMessageContent} {
      border-radius: 8px 8px 0 8px;
      background-color: ${colors.base03};
      color: ${colors.white04};
    }
  }
`;

export default ChatMessageStyled;
