export interface singlePostInterface {
  body: string;
  updatedAt: Date,
  title: string,
  slug: string,
  shortDescription: string,
  image: { url: string },
}


export interface getSinglePostInterface {
  post: singlePostInterface;
}

export interface getPostsListInterface {
  posts: Array<singlePostInterface>;
  postsConnection: {
    pageInfo: { pageSize: number; };
  };
}

export interface getSlugsListInterface {
  posts: Array<{ slug: string }>
}
