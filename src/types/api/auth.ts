export interface InterfaceLoginData {
  email: string;
  password: string;
}

export interface InterfaceRegisterData extends InterfaceLoginData {
  name: string;
}
