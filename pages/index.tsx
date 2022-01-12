//layout
import MainLayout from "src/layouts/MainLayout";

//components
import ChatComponent from "src/components/ChatComponent";

function Home() {

  return (
    <MainLayout>
      <section className="d-grid">
        <ChatComponent name="Test Chat 1"/>
        <ChatComponent name="Test Chat 2"/>
        <ChatComponent name="Test Chat 3"/>
        <ChatComponent name="Test Chat 4"/>
      </section>
    </MainLayout>
  );
}

export default Home
