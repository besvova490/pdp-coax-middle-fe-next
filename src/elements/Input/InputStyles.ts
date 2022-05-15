import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";

// types
import InterfaceInput from "../../types/elements/Input";


const InputStyled = styled.input `
  padding: 0 16px;
  height: 35px;
  width: ${({ fullWidth }: InterfaceInput) => fullWidth ? "100%" : "auto"};
  min-width: 200px;
  background-color: ${colors.disabled05};
  border-radius: 5px;
  transition: all 0.2s;
`;
InputStyled.displayName = "InputStyled";

export const InputWrapper = styled.div `
  display: grid;
  grid-template-column: 100%;
  grid-gap: 4px;
  width: ${({ fullWidth }: InterfaceInput) => fullWidth ? "100%" : "auto"};
`;
InputWrapper.displayName = "InputWrapper";

export const InputLabel = styled.label `
  font-size: 14px;
  line-height: 16px;
  color: ${colors.disabled04};
`;
InputLabel.displayName = "InputLabel";

export const InputError = styled.p `
  font-size: 14px;
  line-height: 16px;
  color: ${colors.error};
`;
InputError.displayName = "InputError";

export default InputStyled;
