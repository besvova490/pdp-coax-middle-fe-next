//components
import Typing from "../../ChatTyping/ChatTyping";

//assets
import { ChatHeaderText, ChatHeaderTextGray } from "./ChatHeaderStyles";

//types
import { InterfaceChatHeader } from "src/types/components/ChatComponent";


function ChatHeader({ name, isTyping, isOnline, ...rest }: InterfaceChatHeader) {


  return (
    <div { ...rest }>
      <p>{ name }</p>
      { isTyping
        ? <Typing/>
        : isOnline
          ? <ChatHeaderText>Online</ChatHeaderText>
          : <ChatHeaderTextGray>was oline 5min</ChatHeaderTextGray>
      }
    </div>
  );
}

export default ChatHeader;
