import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";


export const AboutUsStylesProvider = styled.section `
  width: 900px;
  margin: 80px auto;

  .about-us {
    &__header {
      font-weight: 900;
      font-size: 48px;
      line-height: 58px;
      color: ${colors.black};
      margin-bottom: 50px;

      &::after {
        content: "";
        display: block;
        width: 50px;
        height: 4px;
        background-color: ${colors.base04};
        border-radius: 16px;
        margin-top: 20px;
      }
    }

    &__posts-header {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 16px;
      margin-top: 40px;

      justify-content: flex-start;
    }

    &__content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__content-right {
      margin-left: 100px;
    }

    &__content-left {
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 26px;
      
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;

      max-width: 700px;
    }

    &__content-faq-item {
      display: flex;
      align-items: center;
      padding-left: 10px;

      &::before {
        content: " ";
        margin-right: 6px;
        width: 10px;
        height: 10px;
        display: block;
        border-radius: 50%;
        border: 2px solid ${colors.base04};
      }
    }

    &__content-logo {
      width: 150px;
      height: 150px;
      color: ${colors.base04};
    }

    &__content-logo-label {
      text-align: center;
      font-weight: 700;
      font-size: 28px;
      line-height: 32px;

      margin-top: -50px;

      color: ${colors.black};
    }

    &__posts-content {
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 26px;
    }

    &__single-post-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;

      text-align: center;

      margin-top: 40px;

      &::after {
        content: "";
        display: block;
        width: 50px;
        height: 4px;
        background-color: ${colors.base04};
        border-radius: 16px;
        margin: 20px auto;
      }
    }

    &__single-post-body {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
      color: rgba(0, 0, 34, 0.35);

      margin-bottom: 20px;
    }

    &__single-post-footer-tags {
      display: flex;
      align-items: center;

      margin-bottom: 10px;
    }

    &__single-post-tag {
      color: ${colors.base04};
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    &__single-post-footer-tags-label {
      margin-right: 5px;
    }
  }
`;
