import { gql } from "@apollo/client";


const posts = {
  getSinglePost: gql `
    query getSinglePost($slug: String, $stage: Stage!) {
      post(where: {slug: $slug}, stage: $stage) {
        body
        updatedAt
        title
        slug
        shortDescription
        image {
          url
        }
      }
    }
  `,

  getPostsSlugs: gql `
    query getPostsSlugs {
      posts {
        slug
      }
    } 
  `,

  getPosts: gql `
  query getPosts($first: Int, $skip: Int) {
    posts(first: $first, skip: $skip) {
      body
      updatedAt
      title
      shortDescription
      slug
      image {
        url
      }
    }
    postsConnection {
      pageInfo {
        pageSize
      }
    }
  }  
  `,
};

export default posts;
