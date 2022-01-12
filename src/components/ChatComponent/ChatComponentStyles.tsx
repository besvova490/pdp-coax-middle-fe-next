import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";

const ChatComponentStyles = styled.div `
  border-radius: 8px;
  background-color: ${colors.disabled03};
  padding: 21px 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  font-family: inherit;
`;
ChatComponentStyles.displayName = "ChatComponentStyles";

const ChatTitle = styled.p `
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.black};
`;
ChatTitle.displayName = "ChatTitle";

const ChatTime = styled.p `
  font-size: 14px;
  line-height: 16px;
  color: ${colors.disabled04};
`;
ChatTime.displayName = "ChatTime";

const ChatInfoText = styled.p `
  font-size: 10px;
  line-height: 12px;
  color: ${colors.disabled04};
`;
ChatInfoText.displayName = "ChatInfoText";

const ChatInfoIcon = styled.span `
  color: ${colors.base04};
  height: 24px;
  width: 24px;
  display: block;

  svg {
    height: 100%;
    width: 100%;
  }
`;
ChatInfoIcon.displayName = "ChatInfoIcon";

const ChatInfoIconWrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
ChatInfoIconWrapper.displayName = "ChatInfoIconWrapper";

export {
  ChatInfoIconWrapper,
  ChatInfoIcon,
  ChatInfoText,
  ChatTime,
  ChatTitle,
};

export default ChatComponentStyles;
