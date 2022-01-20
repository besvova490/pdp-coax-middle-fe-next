//types
import { InterfaceSideBarMenuItem } from "src/types/components/SideBar";


function SideBarMenuItem({ label, children, ...rest }: InterfaceSideBarMenuItem) {


  return (
    <li { ...rest }>
      { children || label }
    </li>
  );
}

export default SideBarMenuItem;
