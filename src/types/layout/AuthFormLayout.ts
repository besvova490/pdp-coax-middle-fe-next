import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export default interface InterfaceAuthFormLayout
extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  children: ReactNode | Array<ReactNode>
}
