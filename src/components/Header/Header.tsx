import { RiWechatFill } from "react-icons/ri";

//components
import Button from "src/elements/Button";

//assets
import HeaderStyled, { HeaderLogo, HeaderLogoIcon, HeaderNavigation, HeaderNavigationItem, HeaderNavigationAction } from "./HeaderStyled";


const navLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/posts" },
  { label: "Why it’s important", href: "/404" },
  { label: "About us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
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
        <Button href="/login" primary={false}>Login</Button>
        <Button href="/register" primary>Sign up</Button>
      </HeaderNavigationAction>
    </HeaderStyled>
  );
}

export default Header;
