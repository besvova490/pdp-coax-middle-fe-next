import { io } from "socket.io-client";

const URL = process.env.NEXT_PUBLIC_APP_HOST;
const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

socket.on("connect_error", () => {
  socket.off("connect_error");
});

export default socket;
