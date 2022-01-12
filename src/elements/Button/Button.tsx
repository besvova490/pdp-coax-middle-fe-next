/** @jsxImportSource @emotion/react */
import Link from "next/link";

//type
import InterfaceButton from "../../types/elements/Button";

//assets
import StyledButton from "./ButtonStyles";

function Button(props: InterfaceButton) {
  const { href, children, ...rest } = props;

  switch (true) {
    case !!href:
      return (
        <Link href={`${href}`} passHref { ...rest }>
          <StyledButton as="a" role="link">
            { children }
          </StyledButton>
        </Link>
      );

    default:
      return (
        <StyledButton { ...rest }>
          { children }
        </StyledButton>
      );
  }
}

export default Button;
