/** @jsxImportSource @emotion/react */
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

//components
import Tag from "../Tag";

//types
import ChatComponentInterface from "src/types/components/ChatComponent";

//assets
import ChatComponentStyles, { ChatTitle, ChatTime, ChatInfoIcon, ChatUserAvatar } from "./ChatComponentStyles";


function ChatComponent ({ name, hasNewMessage, href, controlIcon }: ChatComponentInterface) {


  return (
    <Link href={href || "#"} passHref>
      <ChatComponentStyles>
        <ChatUserAvatar>
          <FaUserCircle/>
        </ChatUserAvatar>
        <div>
          <ChatTitle>{ name }</ChatTitle>
          <ChatTime>Jan 5 09:30</ChatTime>
        </div>
        <div>
          { hasNewMessage ? <Tag>New message!</Tag> : null }
        </div>
        <div>
          <ChatInfoIcon>
            {
              controlIcon || <HiOutlineDotsCircleHorizontal/>
            }
          </ChatInfoIcon>
        </div>
      </ChatComponentStyles>
    </Link>
  );
}


export default ChatComponent;
