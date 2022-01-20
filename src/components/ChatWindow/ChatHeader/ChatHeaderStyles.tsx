import styled from "@emotion/styled";
import * as colors from "../../../assets/scss/colors";

//components
import ChatHeaderComponent from "./ChatHeader";

const ChatHeader = styled(ChatHeaderComponent) `
  height: 40px;
  width: 100%;
  background-color: ${colors.disabled03};
  margin-bottom: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;
ChatHeader.displayName = "ChatHeader";

export const ChatHeaderText = styled.span `
  color: ${colors.base04};
`;
ChatHeaderText.displayName = "ChatHeaderText";

export const ChatHeaderTextGray = styled.span `
  opacity: .7;
  font-size: 12px;
`;
ChatHeaderTextGray.displayName = "ChatHeaderTextGray"

export default ChatHeader;
