import styled from "@emotion/styled";


export const HowItWorksStyled = styled.section `
  margin: 120px 0;

  .rate-it-how-it-works {
    &__title {
      font-weight: 900;
      font-size: 48px;
      line-height: 58px;

      text-align: center;

      margin-bottom: 120px;
    }

    &__container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 24px;
    
      align-items: center;
      justify-content: center;
    }

    &__item {
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 16px;

      align-items: center;
      justify-content: center;

      text-align: center;

      padding: 0 40px;
    }

    &__image-container {
      position: relative;

      width: 100%;
      height: 55px;
    }

    &__item-title {
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
    }

    &__item-description {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
    }
  }
`;
