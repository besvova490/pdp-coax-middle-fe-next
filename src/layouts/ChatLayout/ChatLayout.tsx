import { ReactNode } from "react";

//assets
import ChatLayoutStyled from "./ChatLayoutStyled";


function ChatLayout({ children }: { children: ReactNode | Array<ReactNode> }) {


  return (
    <ChatLayoutStyled>
      { children }
    </ChatLayoutStyled>
  );
}

export default ChatLayout;
