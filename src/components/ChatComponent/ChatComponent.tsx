/** @jsxImportSource @emotion/react */
import { FaUserFriends } from "react-icons/fa";

//types
import ChatComponentInterface from "src/types/components/ChatComponent";

//assets
import ChatComponentStyles, { ChatTitle, ChatTime, ChatInfoText, ChatInfoIcon, ChatInfoIconWrapper } from "./ChatComponentStyles";


function ChatComponent ({ name }: ChatComponentInterface) {


  return (
    <ChatComponentStyles>
      <div>
        <ChatTitle>{ name }</ChatTitle>
        <ChatTime>Jan 5 09:30</ChatTime>
      </div>
      <div>
        <ChatInfoIconWrapper>
          <ChatInfoIcon><FaUserFriends/></ChatInfoIcon>
          <ChatInfoText>2 members</ChatInfoText>
        </ChatInfoIconWrapper>
      </div>
    </ChatComponentStyles>
  );
}


export default ChatComponent;
