import Link from "next/link";

//types
import { InterfaceSideBarMenuItem } from "src/types/components/SideBar";


function SideBarMenuItem({ label, children, href, ...rest }: InterfaceSideBarMenuItem) {


  return (
    <li { ...rest }>
      <Link href={href || "#"}>
        <a>
          { children || label }
        </a>
      </Link>
    </li>
  );
}

export default SideBarMenuItem;
