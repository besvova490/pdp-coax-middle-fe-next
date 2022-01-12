/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";

const Header = styled.header `
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: Lato;
`;
Header.displayName = "Header";

export const HeaderLogo = styled.div `
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 18px;
  font-weight: 600;
  font-family: inherit;
`;
HeaderLogo.displayName = "HeaderLogo";

export const HeaderLogoIcon = styled.span `
  color: ${colors.base04};
  height: 24px;
  width: 24px;

  svg {
    height: 100%;
    width: 100%;
  }
`;
HeaderLogoIcon.displayName = "HeaderLogoIcon";

export const HeaderNavigation = styled.nav `
  display: grid;
  grid-template-columns: repeat(5, auto);
  justify-content: space-between;
  align-items: center;
  grid-gap: 30px;
`;

export const HeaderNavigationItem = styled.a `
  color: ${colors.black};
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
  font-family: inherit;
`;

export const HeaderNavigationAction = styled.div `
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  grid-gap: 20px;
`;

export default Header;
