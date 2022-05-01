import { ReactNode } from "react";

export interface ClientPortalInterface {
  children?: ReactNode | Array<ReactNode>;
  selector?: string;
}
