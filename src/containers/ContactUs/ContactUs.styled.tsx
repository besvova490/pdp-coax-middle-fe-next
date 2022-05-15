import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";


export const ContactUsStyled = styled.section `
    display: grid;
    grid-template-columns: 500px 1fr;
    grid-gap: 24px;

    align-items: center;
    justify-content: center;

    .rate-it {
      &__contact-form-text {
        width: 100%;
        height: 100%;

        background-color: ${colors.base04};

        padding: 70px 80px;

        font-weight: 900;
        font-size: 36px;
        line-height: 48px;
        color: ${colors.white04};
      }

      &__contact-form-body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;

        margin-bottom: 20px;
      }

      &__contact-form-footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        margin-top: 20px;
      }
    }
`;
