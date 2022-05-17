/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";

const AuthLayoutStyled = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;

  .rate-it {
    &__page-content {
      flex: 1 1 auto;
  
      width: 1200px;
      padding: 40px;
    }

    &__preview-alert {
      display: grid;
      grid-template-columns: repeat(3, auto);
      justify-content: center;
      align-items: center;
      grid-gap: 28px;
      padding: 10px 20px;
      width: 100%;
      position: sticky;
      top: 0;

      color: ${colors.white04};
      font-size: 18px;
      line-height: 24px;

      background: ${colors.yellow04};
    }

    &__preview-alert-link {
      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      color: ${colors.base03};
    }

    &__preview-alert-icon {
      width: 26px;
      height: 26px;
    }
  }
`;

AuthLayoutStyled.displayName = "AuthLayoutStyled";

export default AuthLayoutStyled;
