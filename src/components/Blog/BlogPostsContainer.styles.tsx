import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";

export const BlogPostHeader = styled.div `
  margin-bottom: 40px;
`;

export const BlogPostsContainer = styled.div `
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 16px;
`;

export const BlogPostsRow = styled.div `
  color: ${colors.black};
  padding: 20px 10px;
  background-color: ${colors.disabled05};
  border-radius: 8px;
  cursor: pointer;
  transition: .2s all;
  display: grid;
  grid-template-columns: auto auto auto 1fr;
  align-items: center;
  grid-gap: 16px;

  &:hover {
    box-shadow: 1px 2px 5px ${colors.disabled04};
  }

  .blog-posts-row__delete-icon {
    width: 18px;
    height: 18px;
    color: ${colors.error};
    transition: .2s all;
    opacity: 0.8;
    margin-left: auto;
    margin-right: 10px;

    svg {
      width: 100%;
      height: 100%;
    }

    &:hover {
      opacity: 1;
      transform: scale(1.2);
    }
  }

  .blog-posts-row__single-tag {
    background-color: ${colors.disabled04};
    padding: 5px;
    border-radius: 8px;
    color: #FFF;
    width: max-content;
    margin: 2px;
  }

  .blog-posts-row__tags {
    display: flex;
    flex-wrap: wrap;
  }
`;
