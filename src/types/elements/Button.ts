import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export default interface InterfaceButton
extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children?: ReactNode | Array<ReactNode>;
  href?: string;
  disabled?: boolean;
  danger?: boolean;
  success?: boolean;
  warning?: boolean;
  primary?: boolean;
  htmlType?: "submit" | "reset" | "button";
}
