import { useState, useEffect } from "react";
import { useRouter } from "next/router";

//layout
import MainLayout from "src/layouts/MainLayout"
import ChatLayout from "src/layouts/ChatLayout";

//components
import ChatWindow from "src/components/ChatWindow";
import ChatInput from "src/components/ChatInput";
import ChatMessage from "src/components/ChatMessage";
import ChatHeader from "src/components/ChatWindow/ChatHeader";

//types
import { SocketMassage } from "src/types/api/socket";

//helpers
import socket from "src/helpers/socket";
import messagesApi from "src/helpers/api/messages";
import { SOCKET_PRIVATE_MESSAGE, SOCKET_USER_IS_TYPING } from "src/helpers/constants";


function Chat() {
  const [messagesList, setMessagesList] = useState<Array<SocketMassage> | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isNewChat, setIsNewChat] = useState(false);
  const router = useRouter();

  const { chatId } = router.query;

  useEffect(() => {
    if (chatId) {
      messagesApi.getSingleChat(+chatId)
        .then(resp => {
          setMessagesList(resp.messages);
        })
        .catch(e => {
          if (e.status === 404) setIsNewChat(true);
        })
    }
  }, []);

  useEffect(() => {
    socket.on(SOCKET_PRIVATE_MESSAGE, ({ message, from, to }) => {
      setMessagesList((state) => ([...(state || []), { message, from, to }]));
    });

    socket.on(
      SOCKET_USER_IS_TYPING,
      () => setIsTyping((isTypingValue) => !isTypingValue),
    )
  }, [socket]);

  //method
  const handleSendMessage = (message: string) => {
    if (isNewChat && chatId) {
      messagesApi.createChat(+chatId);
      setIsNewChat(false);
    }

    if (chatId) {
      socket.emit(SOCKET_PRIVATE_MESSAGE, {
        message,
        to: +chatId,
      });
    }
  }

  const handleOnTyping = (isTypingValue: boolean) => {
    if (chatId) {
      socket.emit(SOCKET_USER_IS_TYPING, {
        isTypingValue,
        to: +chatId,
      });
    }
  }

  return (
    <MainLayout>
      <ChatLayout>
        <ChatHeader name="Test" isTyping={isTyping}/>
        <ChatWindow>
          {
            chatId && messagesList && messagesList.map((item, index) => (
              <ChatMessage key={index} message={item.message} isMy={item.from !== +chatId}/>
            ))
          }
        </ChatWindow>
        <ChatInput
          onSendMessage={handleSendMessage}
          onBlur={() => handleOnTyping(false)}
          onFocus={() => handleOnTyping(true)}
        />
      </ChatLayout>
    </MainLayout>
  );
}

export default Chat;
