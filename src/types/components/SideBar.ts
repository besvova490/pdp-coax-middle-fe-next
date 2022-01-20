import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";


export interface InterfaceSideBarMenuItem extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  active?: boolean;
  label?: ReactNode;
  children?: ReactNode | Array<ReactNode>;
}
