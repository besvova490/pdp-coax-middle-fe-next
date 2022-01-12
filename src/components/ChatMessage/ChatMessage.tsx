import { DetailedHTMLProps, HTMLAttributes } from "react";

//assets
import { ChatMessageContent, ChatMessageInfo } from "./ChatMessageStyled";

interface InterfaceChatMessage extends
DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active?: boolean;
}

function ChatMessage(props: InterfaceChatMessage) {

  return (
    <div { ...props }>
      <ChatMessageContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iure.
      </ChatMessageContent>
      <ChatMessageInfo>
        23:15
      </ChatMessageInfo>
    </div>
  );
}

export default ChatMessage;
