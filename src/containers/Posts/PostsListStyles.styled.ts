import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";


export const PostsListStyles = styled.section `
  display: grid;
  grid-template-columns: 100%;
  justify-content: center;
  align-items: center;
  grid-gap: 26px;

  .rate-it-post {
    display: grid;
    grid-template-columns: 500px 1fr;
    grid-gap: 26px;
    align-items: flex-start;

    &__image-container {
      position: relative;

      width: 100%;
      height: 240px;
    }

    &__main-content {
      display: grid;
      grid-template-columns: 100%;
      grid-gap: 26px;
      align-items: flex-start;
    }

    &__title {
      color: ${colors.base05};
      font-size: 26px;
      line-height: 32px;
      font-weight: 600;
    }
    
    &__description {
      color: ${colors.black};
      font-size: 16px;
      line-height: 18px;
    }
  }
`;
