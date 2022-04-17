//layout
import MainLayout from "src/layouts/MainLayout";

//containers
import GameWrapper from "src/containers/Game/GameWrapper";


function User() {

  return (
    <MainLayout className="play-page">
      <GameWrapper/>
    </MainLayout>
  );
}

export default User;
