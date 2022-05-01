import fetch from "./customFetch";

// types
import { SingleCategoryTagInterface } from "src/types/api/tagCategories";

// helpers
import { Partial } from "src/types/helpers";
import errorBoundary from "../errorBoundary";

const tagsUrls = {
  getTags: "/blogs/tags"
};

const tags = {
  postTag: async (data: Partial<SingleCategoryTagInterface>) => {
    try {
      const result = await fetch({
        url: "/blogs/tags/new",
        method: "POST",
        data
      });

      return result;
    } catch (err: unknown) {
      errorBoundary(err);
    }
  },

  getTags: async () => {
    try {
      const result = await fetch({
        url: tagsUrls.getTags,
        method: "GET",
      });

      return result;
    } catch (err: unknown) {
      errorBoundary(err);
    }
  }
};

export { tagsUrls };
export default tags;
