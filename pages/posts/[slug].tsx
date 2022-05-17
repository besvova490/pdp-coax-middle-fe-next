import { GetStaticPropsContext } from "next";
import Image from "next/image";

// components
import { SinglePostStyles } from "src/containers/Posts/SinglePost.styles";

// layout
import AuthLayout from "src/layouts/AuthLayout";

// types
import { getSlugsListInterface, getSinglePostInterface, singlePostInterface } from "src/types/graphcms/post";

// helpers
import apolloClient from "src/helpers/apolloClient";
import posts from "src/helpers/graphcms/posts";


function SinglePostPage ({ post, preview }: { post: singlePostInterface, preview: boolean }) {


  return (
    <AuthLayout isPreview={preview}>
      <SinglePostStyles>
        { post.image
          ? <div className="rate-it__post-image">
            <Image
              src={post.image.url}
              layout="fill"
              objectFit="cover"
              alt={`${post.title}`}
            />
          </div>
          : null
        }
        <div className="rate-it__post-main-content">
          <h1 className="rate-it__post-title">{ post.title }</h1>
          <span className="rate-it__post-date">{ post.updatedAt }</span>
          <p className="rate-it__post-body">{ post.body }</p>
        </div>
      </SinglePostStyles>
    </AuthLayout>
  );
}

export const getStaticPaths = async () => {
  const resp = await apolloClient.query<getSlugsListInterface>({
    query: posts.getPostsSlugs,
  }).catch(() => null);


  return {
    paths: resp?.data.posts.map(({ slug }: { slug: string }) => {
      return { params: { slug } }
    }),
    fallback: false
  };
};

export const getStaticProps = async ({ params, preview = false }: GetStaticPropsContext) => {
  const { slug } = params || {};

  const resp = await apolloClient.query<getSinglePostInterface>({
    query: posts.getSinglePost,
    variables: { slug, stage: preview ? "DRAFT" : "PUBLISHED" }
  }).catch(() => null);

  return {
    props: {
      post: resp?.data.post,
      preview,
      notFound: !slug,
    }
  };
};


export default SinglePostPage;
