import useSWR from "swr";
import Select, { StylesConfig } from "react-select";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

// layout
import AuthLayout from "src/layouts/AuthLayout";

// components
import Pagination from "src/components/Pagination";
import AboutUs from "src/containers/AboutUs";

// types
import { ListResp } from "src/types/api/baseListResp";
import { BlogPostInterface } from "src/types/api/post";
import { SingleCategoryTagInterface } from "src/types/api/tagCategories";

// helpers
import { queryBuilder } from "src/helpers/api/queryBuilder";
import useQueryParams from "src/hooks/useQueryParams";
import postsApi, { postsUrls } from "src/helpers/api/posts";
import { categoriesUrls } from "src/helpers/api/categories";
import { tagsUrls } from "src/helpers/api/tags";

const selectStyles: StylesConfig<any, any> = {
  container: (styles) => ({ ...styles, width: "100%", minWidth: "250px", flex: "0 0 auto" }),
}


function AboutUsPage({ postsResp }: { postsResp: ListResp<BlogPostInterface> }) {
  const [{ page = 1, category, tag }, setQueryParams] = useQueryParams();

  const getPostQuery = queryBuilder({ page, category, tag });

  const { data: categories } = useSWR(categoriesUrls.getCategories, { fallbackData: [], });
  const { data: tags } = useSWR(tagsUrls.getTags, { fallbackData: [], });
  const { data: posts } = useSWR(`${postsUrls.getPosts}?${getPostQuery}`, { fallbackData: postsResp })

  const categoriesOptions = categories
    ?.map((item: SingleCategoryTagInterface) => ({ value: item.id, label: item.name }));
  const tagOptions = tags
    ?.map((item: SingleCategoryTagInterface) => ({ value: item.id, label: item.name }));

  const activeTag = tagOptions?.find(item => item.value === +tag);
  const activeCategory = categoriesOptions?.find(item => item.value === +category);


  return (
    <AuthLayout>
      <AboutUs>
        <div className="about-us__posts">
          <div className="about-us__posts-header">
            <Select
              styles={selectStyles}
              options={categoriesOptions}
              isClearable
              value={activeCategory}
              onChange={e => setQueryParams(e
                ? { page: 1, tag, category: e.value }
                : { page: 1, tag }
              )}
            />
            <Select
              styles={selectStyles}
              options={tagOptions}
              isClearable
              value={activeTag}
              onChange={e => setQueryParams(e
                ? { page: 1, category, tag: e.value }
                : { page: 1, category }
              )}
            />
          </div>
          <div className="about-us__posts-content">
            { posts?.results.map((post, index) => (
              <div className="about-us__single-post" key={index}>
                <h3 className="about-us__single-post-title">{ post.title }</h3>
                <div className="about-us__single-post-body" dangerouslySetInnerHTML={{ __html: post.body }}/>
                <div className="about-us__single-post-footer">
                  <div className="about-us__single-post-footer-tags">
                    <span className="about-us__single-post-footer-tags-label">Categories: </span>
                    {
                      post.categories.map((item, key) => (
                        <div key={key} className="about-us__single-post-tag">{ item.name }</div>
                      ))
                    }
                  </div>
                  <div className="about-us__single-post-footer-tags">
                    <span className="about-us__single-post-footer-tags-label">Tags:</span>
                    {
                      post.tags.map((item, key) => (
                        <div key={key} className="about-us__single-post-tag">{ item.name }</div>
                      ))
                    }
                  </div>
                </div>
              </div>
            )) }
          </div>
          <div className="about-us__posts-footer">
            <Pagination
              total={posts?.count || 0}
              page={posts?.page || 1}
              pageSize={posts?.pageSize || 10}
              onChange={e => setQueryParams({ page: e })}
            />
          </div>
        </div>
      </AboutUs>
    </AuthLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }: GetServerSidePropsContext) => {
  const { page = 1, category, tag } = query;

  const posts = await postsApi.getPosts({ page, category, tag } as any).catch(e => console.log(e));

  return {
    props: { postsResp: posts },
  };
};

export default AboutUsPage;

