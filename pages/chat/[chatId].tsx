//layout
import MainLayout from "src/layouts/MainLayout"
import ChatLayout from "src/layouts/ChatLayout";

//components
import ChatWindow from "src/components/ChatWindow";
import ChatInput from "src/components/ChatInput";
import ChatMessage from "src/components/ChatMessage";


function Chat() {
  return (
    <MainLayout>
      <ChatLayout>
        <ChatWindow>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
          <ChatMessage/>
        </ChatWindow>
        <ChatInput/>
      </ChatLayout>
    </MainLayout>
  );
}

export default Chat;
