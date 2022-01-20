import {
  createContext,
  useState,
  useEffect,
  useContext
} from "react";

//helpers
import auth from "src/helpers/api/auth";
import socket from "src/helpers/socket";
import { SOCKET_SESSION_STARTED } from "src/helpers/constants";

//types
import { IUserProfileContext, IUserContextProps, IUserProfile } from "src/types/api/auth";


export const UserContext = createContext<IUserProfileContext>([{ name: "", email: "", id: 0 }, () => null, false]);

// provider
const UserContextProvider = ({ user, children }: IUserContextProps): JSX.Element => {
  const [userObj, setUserObj] = useState<IUserProfile | null>(user || null);
  const [userProcessing, setUserProcessing] = useState<boolean>(false);

  const setUser = (newUserObj: IUserProfile) => {
    setUserObj(newUserObj);
  };

  useEffect(() => {
    setUserProcessing(true);

    auth.getProfile()
      .then((resp: IUserProfile) => {
        setUserObj(resp);

        const sessionId = localStorage.getItem("socketSession");

        if (sessionId) {
          socket.auth = { sessionId, userId: resp.id, name: resp.name };
          socket.connect();
        } else {
          socket.auth = { name: resp.name, userId: resp.id };
          socket.connect();
        }
      })
      .catch(console.warn)
      .finally(() => setUserProcessing(false));
  }, []);

  useEffect(() => {
    socket.on(SOCKET_SESSION_STARTED, ({ sessionId, userId }) => {
      socket.auth = { sessionId };
      localStorage.setItem("socketSession", sessionId);
      socket.userId = userId;
    });
  }, [socket]);

  return (
    <UserContext.Provider value={[userObj, setUser, userProcessing]}>
      {children}
    </UserContext.Provider>
  );
};


//hook
export const useUserProfileContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw Error("useUserProfileContext should br used within a UserContextProvider");
  }

  return context;
}

export default UserContextProvider;
