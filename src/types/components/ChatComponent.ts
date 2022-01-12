import { DetailedHTMLProps, HTMLAttributes } from "react";

interface ChatComponentInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
}


export default ChatComponentInterface;
