import { ReactNode } from "react";

//assets
import ChatWindowStyles, { ChatWindowStylesWrapper } from "./ChatWindowStyles";

interface InterfaceChatWindow {
  children: ReactNode | Array<ReactNode>;
}

function ChatWindow({ children }: InterfaceChatWindow) {

  return (
    <ChatWindowStylesWrapper>
      <ChatWindowStyles>
        { children }
      </ChatWindowStyles>
    </ChatWindowStylesWrapper>
  );
}

export default ChatWindow;
