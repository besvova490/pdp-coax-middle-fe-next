import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";


export const NotFoundPageStylesProvider = styled.section `
  min-height: 90vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .not-found {
    &__description {
      font-weight: 500;
      font-size: 18px;
      line-height: 29px;

      margin-top: 40px;

      color: ${colors.disabled04};
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      width: 100%;

      position: relative;

      max-width: 700px;

      svg {
        width: 100%;
        height: 100%;
      }
    }
    
    &__text {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      position: absolute;

      font-weight: 500;
      font-size: 24px;
      line-height: 28px;

      background: rgba(0, 0, 0, .2);

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      z-index: 99;
    }

    &__title {
      text-align: center;

      font-size: 52px;
      line-height: 56px;

      margin-bottom: 40px;

      color: ${colors.base03};
    }
  }
`;
