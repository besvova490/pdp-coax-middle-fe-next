/* eslint-disable no-unused-vars */
import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export default interface InterfaceInput
extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  disabled?: boolean;
  error?: ReactNode;
  label?: ReactNode;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
}
