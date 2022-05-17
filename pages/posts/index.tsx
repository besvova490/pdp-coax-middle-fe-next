import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@apollo/client";

// layout
import AuthLayout from "src/layouts/AuthLayout";

// components
import Pagination from "src/components/Pagination";
import { PostsListStyles } from "src/containers/Posts/PostsListStyles.styled";

// types
import { getPostsListInterface, singlePostInterface } from "src/types/graphcms/post";

// helpers
import postsGraph from "src/helpers/graphcms/posts";
import apolloClient from "src/helpers/apolloClient";
import useQueryParams from "src/hooks/useQueryParams";

const PAGE_SIZE = 5;

function MainPostPage ({ posts, count }: { posts: Array<singlePostInterface>, count: number }) {
  const [postsList, setPostsList] = useState(posts);

  const [{ page = 1 }, setQueryParams] = useQueryParams();

  const { data } = useQuery(
    postsGraph.getPosts,
    { variables: { first: 5, skip: (PAGE_SIZE * +page) - PAGE_SIZE } }
  );

  useEffect(() => {
    data && setPostsList(data.posts);
  }, [data]);


  return (
    <AuthLayout>
      <PostsListStyles>
        { postsList.map((item, key) => (
          <div key={key} className="rate-it-post">
            { item.image
              ? <div className="rate-it-post__image-container">
                <Image
                  src={item.image.url}
                  layout="fill"
                  objectFit="contain"
                  alt={`${item.title}`}
                />
              </div>
              : null
            }
            <div className="rate-it-post__main-content">
              <Link href={`/posts/${item.slug}`}>
                <a>
                  <h2 className="rate-it-post__title">{ item.title }</h2>
                </a>
              </Link>
              <p className="rate-it-post__description">{ item.shortDescription }</p>
            </div>
          </div>
        )) }
      </PostsListStyles>
      <Pagination
        page={+page}
        pageSize={PAGE_SIZE}
        total={count}
        onChange={e => setQueryParams({ page: e })}
      />
    </AuthLayout>
  );
}

export const getStaticProps = async () => {
  const resp = await apolloClient.query<getPostsListInterface>({
    query: postsGraph.getPosts,
    variables: { first: 5, skip: 0 }
  }).catch(() => null);


  return {
    props: {
      posts: resp?.data.posts || [],
      count: resp?.data.postsConnection.pageInfo.pageSize || 0,
    }
  };
}


export default MainPostPage;
