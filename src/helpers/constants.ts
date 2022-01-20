export const API_URL = `${process.env.NEXT_PUBLIC_APP_HOST}`;


//socket events
export const SOCKET_NEW_USER_CONNECTED = "USER_CONNECTED";
export const SOCKET_USER_DISCONNECTED = "USER_DISCONNECTED";
export const SOCKET_USERS = "USERS";
export const SOCKET_SESSION_STARTED = "SESSION";
export const SOCKET_PRIVATE_MESSAGE = "PRIVATE_MESSAGE";
export const SOCKET_USER_IS_TYPING = "USER_IS_TYPING";
export const SOCKET_CONNECTION = "connection";
export const SOCKET_DISCONNECT = "disconnect";
export const SOCKET_CONNECTION_ERROR = "connection_error";
