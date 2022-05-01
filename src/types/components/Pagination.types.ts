/* eslint-disable no-unused-vars */

export interface PaginationInterface {
  page: number;
  total: number;
  pageSize: number;
  onChange: (page: number) => void;
}
