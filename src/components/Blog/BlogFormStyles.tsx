import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";


export const BlogForm = styled.form `
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 16px;
`;

export const BlogFormBtnGroup = styled.div `
  display: grid;
  grid-template-columns: 100px auto;
  grid-gap: 16px;
`;

export const BlogFormInputGroup = styled.div `
  display: grid;
  grid-template-columns: auto 250px 250px;
  grid-gap: 16px;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const BlogSelectLabel = styled.span `
  font-size: 14px;
  line-height: 16px;
  color: ${colors.disabled04};
  margin-bottom: 8px;
  display: flex;
`;

export const BlogSelectLabelCreate = styled.span `
  margin-left: 3px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const BlogSelectWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
