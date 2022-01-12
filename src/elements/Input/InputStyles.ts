import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";


const InputStyled = styled.input `
  padding: 0 16px;
  height: 35px;
  width: auto;
  min-width: 200px;
  background-color: ${colors.disabled05};
  border-radius: 5px;
  transition: all 0.2s;

  &:focus, &:hover {
    background-color: ${colors.white04};
  }
`;
InputStyled.displayName = "InputStyled";

export const InputWrapper = styled.div `
  display: grid;
  grid-template-column: 100%;
  grid-gap: 4px;
  width: 250px;
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
