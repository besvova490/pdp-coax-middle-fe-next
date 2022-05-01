import { ReactNode } from "react";


interface ModalInterface {
  visible?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  children?: ReactNode | Array<ReactNode>;
}

export default ModalInterface;
