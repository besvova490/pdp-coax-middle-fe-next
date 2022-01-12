/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";

const SideBarMenuStyles = styled.nav `
  display: grid;
  grid-template-columns: 320px;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 20px;
`;

SideBarMenuStyles.displayName = "SideBarMenuStyles";


const MenuListContainer = styled.ul `
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
MenuListContainer.displayName = "MenuListContainer";

const MenuListItem = styled.li `
  padding: 16px 20px;
  width: 230px;
  border-radius: 10px;
  color: ${(props: any) => props.active ? colors.white04 : colors.disabled04};
  background: ${(props: any) => props.active ? colors.base04 : "transparent"};
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 10px;
  position: relative;
  cursor: pointer;
  justify-content: flex-start;

  &:before {
    content: " ";
    position: absolute;
    width: 4px;
    border-radius: 4px;
    height: 100%;
    left: -45px;
    background: ${(props: any) => props.active ? colors.base04 : "transparent"};
  }
`;
MenuListItem.displayName = "MenuListItem";


export { MenuListContainer, MenuListItem };

export default SideBarMenuStyles;
