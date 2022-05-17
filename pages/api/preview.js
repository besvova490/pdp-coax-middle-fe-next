
import { gql } from "@apollo/client";

// helpers
import apolloClient from "src/helpers/apolloClient";


export default async function handler(req, res) {
  if (
    req.query.secret !== process.env.NEXT_PUBLIC_APP_GRAPHCMS_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const resp = await apolloClient.query({
    query: gql `
    query singlePostPreview($slug: String) {
      post(where: {slug: $slug}, stage: DRAFT) {
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
    variables: { slug: req.query.slug },
  });

  if (!resp.data.post) {
    return res.status(401).json({ message: "Invalid slug" });
  }

  res.setPreviewData({})

  res.writeHead(307, { Location: `/posts/${resp.data.post.slug}` });
  res.end()
}
