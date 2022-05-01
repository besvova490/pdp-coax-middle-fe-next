import fetch from "./customFetch";

// types
import { SingleCategoryTagInterface } from "src/types/api/tagCategories";

// helpers
import { Partial } from "src/types/helpers";
import errorBoundary from "../errorBoundary";

const categoriesUrls = {
  getCategories: "/blogs/categories",
};

const categories = {
  postCategory: async (data: Partial<SingleCategoryTagInterface>) => {
    try {
      const result = await fetch({
        url: "/blogs/categories/new",
        method: "POST",
        data
      });

      return result;
    } catch (err: unknown) {
      errorBoundary(err);
    }
  },

  getCategories: async () => {
    try {
      const result = await fetch({
        url: categoriesUrls.getCategories,
        method: "GET",
      });

      return result;
    } catch (err: unknown) {
      errorBoundary(err);
    }
  }
};

export { categoriesUrls };

export default categories
