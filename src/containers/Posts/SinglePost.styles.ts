import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";

export const SinglePostStyles = styled.section `
  display: grid;
  grid-template-columns: 500px 1fr;
  align-items: flex-start;
  justify-content: center;
  grid-gap: 32px;

  .rate-it {
    &__post-image {
      position: relative;
      width: 100%;
      height: 300px;
    }

    &__post-main-content {
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 16px;
      align-items: flex-start;
      justify-content: center;
    }

    &__post-title {
      font-size: 28px;
      color: ${colors.black};
    }

    &__post-date {
      opacity: .7;
      font-size: 12px;
      color: ${colors.black};
    }

    &__post-body {
      font-size: 16px;
      line-height: 22px;
      opacity: .9;
      color: ${colors.black};
    }
  }
`;
