/** @jsxImportSource @emotion/react */
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

//types
import ChatComponentInterface from "src/types/components/ChatComponent";

//assets
import ChatComponentStyles, { ChatTitle, ChatTime, ChatInfoIcon, ChatUserAvatar } from "./ChatComponentStyles";


function ChatComponent ({ name }: ChatComponentInterface) {


  return (
    <ChatComponentStyles>
      <ChatUserAvatar>
        <FaUserCircle/>
      </ChatUserAvatar>
      <div>
        <ChatTitle>{ name }</ChatTitle>
        <ChatTime>Jan 5 09:30</ChatTime>
      </div>
      <div>
        <ChatInfoIcon>
          <HiOutlineDotsCircleHorizontal/>
        </ChatInfoIcon>
      </div>
    </ChatComponentStyles>
  );
}


export default ChatComponent;
