/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";

//components
import AuthFormLayoutComponent from "./AuthFormLayout";

const AuthFormLayout = styled(AuthFormLayoutComponent) `
  display: grid;
  grid-template-columns: 1fr 550px;
  align-items: center;
  grid-gap: 50px;
  background-color: ${colors.disabled05};
`;

export const AuthFormLayoutMain = styled.div `
  padding: 0 50px;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 100%;
  grid-gap: 20px;
`;

export const AuthFormIconStyles = styled.span `
  height: 100%;
  width: 100%;
  display: block;

  svg {
    height: 100%;
    width: 100%;
  }
`;

export default AuthFormLayout;
