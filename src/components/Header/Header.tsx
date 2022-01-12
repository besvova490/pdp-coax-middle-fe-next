import { RiWechatFill } from "react-icons/ri";

//components
import Button from "src/elements/Button";

//assets
import HeaderStyled, { HeaderLogo, HeaderLogoIcon, HeaderNavigation, HeaderNavigationItem, HeaderNavigationAction } from "./HeaderStyled";


const navLinks = [
  { label: "How it works", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Why it’s important", href: "#" },
  { label: "About us", href: "#" },
  { label: "Contact", href: "#" },
];


function Header() {

  return (
    <HeaderStyled>
      <HeaderLogo>
        <HeaderLogoIcon>
          <RiWechatFill/>
        </HeaderLogoIcon>
        <span>Rate it</span>
      </HeaderLogo>
      <menu>
        <HeaderNavigation>
          {
            navLinks.map((link, index) => (
              <HeaderNavigationItem href={link.href} key={index}>{ link.label }</HeaderNavigationItem>
            ))
          }
        </HeaderNavigation>
      </menu>
      <HeaderNavigationAction>
        <Button primary={false}>Login</Button>
        <Button primary>Sign up</Button>
      </HeaderNavigationAction>
    </HeaderStyled>
  );
}

export default Header;
