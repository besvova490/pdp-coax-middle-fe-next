import { useState, useEffect } from "react";

//layout
import MainLayout from "src/layouts/MainLayout";

//components
import ChatComponent from "src/components/ChatComponent";

//types
import { InterfaceSocketUser } from "../src/types/api/auth";

//helpers
import socket from "src/helpers/socket";
import { SOCKET_USERS, SOCKET_NEW_USER_CONNECTED, SOCKET_PRIVATE_MESSAGE } from "src/helpers/constants";

//assets
import notificationSound from "../src/assets/audio/notificationSound.mp3";


function Home() {
  const [usersOnline, setUsersOnline] = useState<Array<InterfaceSocketUser & { newMessage?: boolean }> | null>(null);

  useEffect(() => {
    socket.on(SOCKET_USERS, (users) => setUsersOnline(users));
    socket.on(SOCKET_NEW_USER_CONNECTED, (user) => {
      const filteredUsersList = usersOnline?.filter(item => item.userId !== user.userId);
  
      setUsersOnline([...(filteredUsersList || []), user]);
    });

    socket.on(SOCKET_PRIVATE_MESSAGE, ({ from }) => {
      setUsersOnline((users: any) => {
        return users?.map((user: InterfaceSocketUser) => ({
          ...user,
          newMessage: +user.userId === from
        }))
      });

      const audio = new Audio(notificationSound);
      audio.play();
    });
  }, [socket]);
  

  return (
    <MainLayout>
      <section className="d-grid">
        {
          usersOnline && usersOnline.map((item, index) => (
            <ChatComponent
              name={item.name}
              hasNewMessage={item.newMessage}
              key={index}
              href={`/chat/${item.userId}`}
            />
          ))
        }
      </section>
    </MainLayout>
  );
}

export default Home
