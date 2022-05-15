/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const AuthLayoutStyled = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;

  .rate-it__page-content {
    flex: 1 1 auto;

    width: 1200px;
    padding: 40px;
  }
`;

AuthLayoutStyled.displayName = "AuthLayoutStyled";

export default AuthLayoutStyled;
