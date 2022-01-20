import { useState, useEffect } from "react";
import Link from "next/link";

//layout
import MainLayout from "src/layouts/MainLayout";

//components
import ChatComponent from "src/components/ChatComponent";

//types
import { InterfaceSocketUser } from "../src/types/api/auth";

//helpers
import socket from "src/helpers/socket";
import { SOCKET_USERS, SOCKET_NEW_USER_CONNECTED } from "src/helpers/constants";


function Home() {
  const [usersOnline, setUsersOnline] = useState<Array<InterfaceSocketUser> | null>(null);

  useEffect(() => {
    socket.on(SOCKET_USERS, (users) => setUsersOnline(users));
    socket.on(SOCKET_NEW_USER_CONNECTED, (user) => {
      const filteredUsersList = usersOnline?.filter(item => item.userId !== user.userId);
  
      setUsersOnline([...(filteredUsersList || []), user]);
    });
  }, [socket]);
  

  return (
    <MainLayout>
      <section className="d-grid">
        {
          usersOnline && usersOnline.map((item, index) => (
            <Link key={index} href={`/chat/${item.userId}`}>
              <a>
                <ChatComponent name={item.name}/>
              </a>
            </Link>
          ))
        }
      </section>
    </MainLayout>
  );
}

export default Home
