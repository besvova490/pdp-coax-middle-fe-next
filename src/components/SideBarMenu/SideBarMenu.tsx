/** @jsxImportSource @emotion/react */
import { BsFillChatFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";

//assets
import SideBarMenuStyles, { MenuListContainer, MenuListItem } from "./SideBarMenuStyled";

function SideBarMenu () {

  return (
    <SideBarMenuStyles>
      <MenuListContainer>
        <MenuListItem active>
          <BsFillChatFill/>
          <p>Chats</p>
        </MenuListItem>
        <MenuListItem>
          <AiFillSetting/>
          <p>Settings</p>
        </MenuListItem>
      </MenuListContainer>
    </SideBarMenuStyles>
  );
}

export default SideBarMenu;
