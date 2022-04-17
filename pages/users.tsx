import { useState, useEffect } from "react";
import { RiChatNewLine } from "react-icons/ri";

//layout
import MainLayout from "src/layouts/MainLayout";

//components
import ChatComponent from "src/components/ChatComponent";

//types
import { IUserProfile } from "../src/types/api/auth";

//helpers
import usersApi from "src/helpers/api/users";


function User() {
  const [users, setUsers] = useState<Array<IUserProfile> | null>(null);

  useEffect(() => {
    usersApi.getUsers()
      .then((resp: { users: Array<IUserProfile>, count: number }) => setUsers(resp.users))
  }, []);
  

  return (
    <MainLayout>
      <section className="d-grid">
        {
          users && users.length
            ? users.map((item, index) => (
              <ChatComponent
                name={item.name}
                key={index}
                href={`/chat/${item.id}`}
                controlIcon={<RiChatNewLine/>}
              />
            ))
            : null
        }
      </section>
    </MainLayout>
  );
}

export default User;
