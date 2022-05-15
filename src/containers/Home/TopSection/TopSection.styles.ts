import styled from "@emotion/styled";


const TopSectionStyled = styled.section `
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 450px;
  align-items: center;
  justify-content: center;

  .rate-it-home {
    &__text-container {
      max-width: 350px;
    }

    &__title {
      font-weight: 300;
      font-size: 48px;
      line-height: 58px;
    }

    &__description {
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;

      margin-top: 20px;
    }

    &__image-container {
      position: relative;

      width: 100%;
      height: 100%;
    }
  }
`;


export default TopSectionStyled;
