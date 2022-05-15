import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";

//type
import InterfaceButton from "../../types/elements/Button";

const buttonSize = {
  large: { height: "46px", padding: "12px", "min-width": "100px" },
  middle: { height: "36px", padding: "8px", "min-width": "80px" },
  small: { height: "30px", padding: "8px", "min-width": "50px" },
};

const getBackgroundColor = ({ primary, danger, success, warning, disabled }: InterfaceButton) => {
  switch (true) {
    case disabled:
      return colors.disabled04;
    case danger:
      return colors.error;
    case success:
      return colors.success04;
    case warning:
      return colors.orange04;
    case primary:
      return colors.base04;
    default:
      return colors.white04;
  }
}

const isDefaultButton = ({ primary, danger, success, warning }: InterfaceButton) => {
  return [primary, danger, success, warning].every(item => !item);
}

const Button = styled.button `
  min-width: ${({ size = "large" }: InterfaceButton) => buttonSize[size]["min-width"]};
  width: max-content;
  height: ${({ size = "large" }: InterfaceButton) => buttonSize[size].height};
  padding: ${({ size = "large" }: InterfaceButton) => buttonSize[size].padding};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  line-height: 22px;
  background-color: ${(props: InterfaceButton) => getBackgroundColor(props)};
  color: ${(props: InterfaceButton) => props.disabled || !isDefaultButton(props) ? colors.white04 : colors.base04};
  border-radius: 8px;
  border: 2px solid ${(props: InterfaceButton) => props.disabled || !isDefaultButton(props) ? "transparent" : colors.base04};
  cursor: pointer;
  transition: all .15s;
  font-family: inherit;
  font-weight: 400;
  opacity: ${(props: InterfaceButton) => props.disabled ? "0.6" : "1"};

  &:hover {
    ${(props: InterfaceButton) => props.disabled ? "cursor: not-allowed" : "box-shadow: 1px 4px 10px rgba(31, 100, 255, 0.25);"}
  }
`;
Button.displayName = "Button";

export default Button;
