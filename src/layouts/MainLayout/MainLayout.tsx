/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";

//components
import SideBar from "src/components/SideBar";

//context
import UserContextProvider from "src/context/UserSocketContext";

//assets
import MainLayoutStyled, { MainLayoutContent } from "./MainLayoutStyled";

function MainLayout({ children }: { children: ReactNode }) {


  return (
    <UserContextProvider>
      <MainLayoutStyled>
        <SideBar/>
        <MainLayoutContent>
          { children }
        </MainLayoutContent>
      </MainLayoutStyled>
    </UserContextProvider>
  );
}

export default MainLayout;

