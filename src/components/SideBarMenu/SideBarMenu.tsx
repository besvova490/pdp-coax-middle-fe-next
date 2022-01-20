/** @jsxImportSource @emotion/react */
import { BsFillChatFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";

//assets
import SideBarMenuStyles, { MenuListContainer, MenuListItem } from "./SideBarMenuStyled";


const SIDE_BAR_MENUS = [
  { icon: <BsFillChatFill/>, label: "Chats" },
  { icon: <HiUserGroup/>, label: "Users" },
  { icon: <AiFillSetting/>, label: "Settings" },
];

function SideBarMenu () {

  return (
    <SideBarMenuStyles>
      <MenuListContainer>
        {
          SIDE_BAR_MENUS.map((item, index) => (
            <MenuListItem key={index} active={index === 0}>
              { item.icon }
              <p>{ item.label }</p>
            </MenuListItem>
          ))
        }
      </MenuListContainer>
    </SideBarMenuStyles>
  );
}

export default SideBarMenu;
