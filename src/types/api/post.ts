export interface BlogPostInterface {
  id: number,
  title: string,
  body: string,
  categories: Array<{ id: number, name: string }>,
  tags: Array<{ id: number, name: string }>,
}

export interface BlogPostCreateInterface {
  title: string,
  body: string,
  categories: Array<number>,
  tags: Array<number>,
}

export interface BlogPostFormInterface {
  title: string,
  body: string,
  categories: Array<{ value: number }>,
  tags: Array<{ value: number }>,
}
