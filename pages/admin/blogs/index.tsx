import { MdDeleteForever } from "react-icons/md";
import useSWR from "swr";
import Link from "next/link";

// layout
import MainLayout from "src/layouts/MainLayout";

// components
import Pagination from "src/components/Pagination";
import { BlogPostsContainer, BlogPostsRow, BlogPostHeader } from "src/components/Blog/BlogPostsContainer.styles";

// types
import { BlogPostInterface } from "src/types/api/post";

// helpers
import useQueryParams from "src/hooks/useQueryParams";
import postsApi, { postsUrls } from "src/helpers/api/posts";


function Blogs() {
  const [{ page = 1 }, setQueryParams] = useQueryParams();

  const { data, mutate } = useSWR(`${postsUrls.getPosts}?page=${+page}`, { fallbackData: { results: [], count: 0 } });
  

  const handleDelete = (id: number) => {
    const newData = data?.results.filter((item: BlogPostInterface) => item.id !== id) || [];

    mutate({ ...data, results: newData } as { results: never[]; count: number; }, { revalidate: false });

    postsApi.deleteSinglePosts(id).then(() => mutate());
  }

  return (
    <MainLayout>
      <BlogPostHeader>
        <Link href="/admin/blogs/new"><a>Create new post</a></Link>
      </BlogPostHeader>
      <BlogPostsContainer>
        { data?.results.map((item: BlogPostInterface, index) => (
          <Link key={index} href={`/admin/blogs/${item.id}`}>
            <a>
              <BlogPostsRow>
                <p>{ item.title }</p>
                <div className="blog-posts-row__tags">
                  { item.categories.map((category, key) => (
                    <div className="blog-posts-row__single-tag" key={key}>{ category.name }</div>
                  )) }
                </div>
                <div className="blog-posts-row__tags">
                  { item.tags.map((tag, key) => (
                    <div className="blog-posts-row__single-tag" key={key}>{ tag.name }</div>
                  )) }
                </div>
                <span
                  className="blog-posts-row__delete-icon"
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(item.id);
                  }}
                >
                  <MdDeleteForever/>
                </span>
              </BlogPostsRow>
            </a>
          </Link>
        )) }
      </BlogPostsContainer>
      <Pagination
        page={+page}
        pageSize={10}
        total={data?.count || 0}
        onChange={e => setQueryParams({ page: e })}
      />
    </MainLayout>
  );
}


export default Blogs;
