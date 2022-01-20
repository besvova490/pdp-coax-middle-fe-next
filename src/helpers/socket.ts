import { io } from "socket.io-client";

//types
import { InterfaceSocket } from "src/types/api/auth";

//helpers
import { SOCKET_CONNECTION_ERROR, SOCKET_CONNECTION } from "./constants";


const URL = process.env.NEXT_PUBLIC_APP_HOST;
const socket: InterfaceSocket = io(`${URL}`, { autoConnect: false, reconnection: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

socket.on(SOCKET_CONNECTION_ERROR, () => {
  socket.off(SOCKET_CONNECTION);
});

export default socket;
