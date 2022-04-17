import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

interface ChatComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  hasNewMessage?: boolean;
  href?: string;
  controlIcon?: ReactNode | Array<ReactNode>;
}

export interface InterfaceChatHeader extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  isTyping?: boolean;
  isOnline?: boolean;
}


export default ChatComponentInterface;
