import { DetailedHTMLProps, HTMLAttributes } from "react";
import ReactHtmlParser from "react-html-parser";

//assets
import { ChatMessageContent, ChatMessageInfo } from "./ChatMessageStyled";

interface InterfaceChatMessage extends
DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active?: boolean;
  message?: string;
  isMy?: boolean;
}

function ChatMessage({ message, ...props }: InterfaceChatMessage) {

  return (
    <div { ...props }>
      <ChatMessageContent>
        { message ? ReactHtmlParser(message) : null }
      </ChatMessageContent>
      <ChatMessageInfo>
        23:15
      </ChatMessageInfo>
    </div>
  );
}

export default ChatMessage;
