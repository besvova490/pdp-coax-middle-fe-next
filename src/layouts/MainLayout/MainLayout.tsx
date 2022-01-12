/** @jsxImportSource @emotion/react */
import { ReactNode } from "react";

//components
import SideBar from "src/components/SideBar";

//assets
import MainLayoutStyled, { MainLayoutContent } from "./MainLayoutStyled";

function MainLayout({ children }: { children: ReactNode }) {


  return (
    <MainLayoutStyled>
      <SideBar/>
      <MainLayoutContent>
        { children }
      </MainLayoutContent>
    </MainLayoutStyled>
  );
}

export default MainLayout;

