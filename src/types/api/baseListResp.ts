export interface ListResp<T> {
  count: number,
  page: number,
  pageSize: number,
  results: Array<T>
}
