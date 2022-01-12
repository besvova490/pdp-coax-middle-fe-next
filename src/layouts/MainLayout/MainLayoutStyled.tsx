/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const MainLayoutStyled = styled.div `
  display: grid;
  grid-template-columns: 320px 1fr;
  min-height: 100vh;
`;
MainLayoutStyled.displayName = "MainLayoutStyled";

const MainLayoutContent = styled.main `
  padding: 76px;
`;
MainLayoutContent.displayName = "MainLayoutContent";


export { MainLayoutContent };

export default MainLayoutStyled;
