import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";

const ChatWindowStyles = styled.div `
  background-color: ${colors.disabled03};
  padding: 20px;
  width: 100%;
  flex: 1 1 auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
`;
ChatWindowStyles.displayName = "ChatWindowStyles";

export const ChatWindowInfo = styled.div `
  position: fixed;
  background-color: ${colors.base03};
  height: 40px;
  width: 100%;
  top: 0;
`;
ChatWindowInfo.displayName = "ChatWindowInfo";
 
export const ChatWindowStylesWrapper = styled.div `
  position: relative;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  min-height: 400px;
  flex: 1 1 auto;
  display: flex;

  &:before {
    content: " ";
    background-color: ${colors.disabled03};
    position: absolute;
    width: 100%;
    height: 20px;
    top: 0;
    left: 0;
    opacity: 0.8;
  }

  &:after {
    content: " ";
    background-color: ${colors.disabled03};
    position: absolute;
    width: 100%;
    height: 20px;
    bottom: 0;
    left: 0;
    opacity: 0.8;
  }
`;
ChatWindowStylesWrapper.displayName = "ChatWindowStylesWrapper";


export default ChatWindowStyles;

