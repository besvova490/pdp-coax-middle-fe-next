import styled from "@emotion/styled";
import * as colors from "../../assets/scss/colors";

export const PaginationStyles = styled.div `
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .pagination-single-page {
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid ${colors.disabled04};
    color: ${colors.black};
    margin-right: 10px;
    cursor: pointer;
    transition: .2s all;

    &:hover {
      border: 1px solid ${colors.base06};
      color: ${colors.base06};
    }

    &:last-of-type {
      margin-right: 0;
    }

    svg {
      width: 18px;
      height: 18px;
    }

    &_active {
      border: 1px solid ${colors.base03};
      color: ${colors.base03};
    }
  }
`;
