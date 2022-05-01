import fetch from "./customFetch";

// types
import { BlogPostCreateInterface } from "src/types/api/post";

// helpers
import { queryBuilder } from "./queryBuilder";
import { Partial } from "src/types/helpers";
import errorBoundary from "../errorBoundary";

const postsUrls = {
  getPosts: "/blogs"
};

interface QueryInterface { page?: string | number, category?: string | number, tag?: string | number }

const posts = {
  postPostBlog: async (data: Partial<BlogPostCreateInterface>) => {
    try {
      const result = await fetch({
        url: "/blogs/new",
        method: "POST",
        data
      });

      return result;
    } catch (err: unknown) {
      errorBoundary(err);
    }
  },

  getPosts: async ({ page = 1, category, tag }: QueryInterface) => {
    try {
      const getPostQuery = queryBuilder({ page, category, tag });

      const result = await fetch({
        url: `${postsUrls.getPosts}?${getPostQuery}`,
        method: "GET",
      });

      return result;
    } catch (err: unknown) {
      errorBoundary(err);
    }
  },

  getSinglePosts: async (id: string | number) => {
    try {
      const result = await fetch({
        url: `${postsUrls.getPosts}/${id}`,
        method: "GET",
      });

      return result;
    } catch (err: unknown) {
      errorBoundary(err);
    }
  },

  patchSinglePosts: async (id: string | number, data: Partial<BlogPostCreateInterface>) => {
    try {
      const result = await fetch({
        url: `${postsUrls.getPosts}/${id}`,
        method: "PATCH",
        data
      });

      return result;
    } catch (err: unknown) {
      errorBoundary(err);
    }
  },


  deleteSinglePosts: async (id: string | number) => {
    try {
      const result = await fetch({
        url: `${postsUrls.getPosts}/${id}`,
        method: "DELETE",
      });

      return result;
    } catch (err: unknown) {
      errorBoundary(err);
    }
  },
};

export { postsUrls };
export default posts;
