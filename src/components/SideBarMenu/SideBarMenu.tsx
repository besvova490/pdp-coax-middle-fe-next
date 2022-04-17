/** @jsxImportSource @emotion/react */
import { useRouter } from "next/router";
import { BsFillChatFill } from "react-icons/bs";
import { RiGameFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";

//assets
import SideBarMenuStyles, { MenuListContainer, MenuListItem } from "./SideBarMenuStyled";


const SIDE_BAR_MENUS = [
  { icon: <BsFillChatFill/>, label: "Chats", href: "/chat" },
  { icon: <HiUserGroup/>, label: "Users", href: "/users" },
  { icon: <RiGameFill/>, label: "Play", href: "/play" },
];

function SideBarMenu () {
  const router = useRouter();

  return (
    <SideBarMenuStyles>
      <MenuListContainer>
        {
          SIDE_BAR_MENUS.map((item, index) => (
            <MenuListItem
              key={index}
              active={router.pathname === item.href}
              href={item.href}
            >
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
