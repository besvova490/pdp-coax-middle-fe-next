/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";

//components
import SideBar from "src/components/SideBar";

//context
import UserContextProvider from "src/context/UserSocketContext";

//assets
import MainLayoutStyled, { MainLayoutContent } from "./MainLayoutStyled";

function MainLayout({ children, className = "" }: { children: ReactNode, className?: string, }) {


  return (
    <UserContextProvider>
      <MainLayoutStyled>
        <SideBar/>
        <MainLayoutContent className={className}>
          { children }
        </MainLayoutContent>
      </MainLayoutStyled>
    </UserContextProvider>
  );
}

export default MainLayout;

