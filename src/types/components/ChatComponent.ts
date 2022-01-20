import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ChatComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
}

export interface InterfaceChatHeader extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  isTyping?: boolean;
  isOnline?: boolean;
}


export default ChatComponentInterface;
