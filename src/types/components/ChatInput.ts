/* eslint-disable no-unused-vars */
export default interface InterfaceChatInput {
  onSendMessage: (message: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}
