/* eslint-disable no-unused-vars */
import { ReactNode } from "react";
import { Socket } from "socket.io-client";

export interface InterfaceLoginData {
  email: string;
  password: string;
}

export interface InterfaceRegisterData extends InterfaceLoginData {
  name: string;
}

export interface IUserProfile {
  id: number;
  name: string;
  email: string;
}

export type IUserProfileContext = [IUserProfile | null, (newUser: IUserProfile) => void, boolean];

export interface IUserContextProps {
  user?: IUserProfile;
  children?: ReactNode | Array<ReactNode>;
}

export interface InterfaceSocketUser {
  userId: string;
  name: string;
  isConnected: true;
}

export interface InterfaceChat {
  memberId: string;
  isMuted: string;
  member: IUserProfile;
}

export interface InterfaceSocket extends Socket {
  userId?: number
}
