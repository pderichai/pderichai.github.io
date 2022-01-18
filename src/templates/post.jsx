import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import "katex/dist/katex.min.css";
import Layout from "../components/Layout";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Seo from "../components/Seo";

const MyH1 = (props) => (
  <h3 className="post" {...props}>
    {props.children}
  </h3>
);
const MyH2 = (props) => (
  <h4 className="post" {...props}>
    {props.children}
  </h4>
);
const MyP = (props) => (
  <p className="post" {...props}>
    {props.children}
  </p>
);
// TODO: For some reason, this doesn't work?
// const MyCode = (props) => (
//   <code className="post" {...props}>
//     {props.children}
//   </code>
// );
const MyPre = (props) => (
  <pre className="post" {...props}>
    {props.children}
  </pre>
);
const MyOl = (props) => (
  <ol className="post" {...props}>
    {props.children}
  </ol>
);

const components = {
  h1: MyH1,
  h2: MyH2,
  p: MyP,
  // code: MyCode,
  pre: MyPre,
  ol: MyOl,
};

function PostTemplate({ data: { mdx } }) {
  const featuredImage = getImage(mdx.frontmatter.featuredImage);
  return (
    <Layout>
      <Seo
        title={mdx.frontmatter.title}
        description={mdx.excerpt}
        twitterImage={
          mdx.frontmatter.twitterImage ? mdx.frontmatter.twitterImage : null
        }
        openGraphImage={
          mdx.frontmatter.openGraphImage ? mdx.frontmatter.openGraphImage : null
        }
      />
      <h2 className="post-title">{mdx.frontmatter.title}</h2>
      <p className="post-date">{mdx.frontmatter.date}</p>
      {mdx.frontmatter.lastUpdated && (
        <p className="last-updated-date">
          {`Last updated on ${mdx.frontmatter.lastUpdated}`}
        </p>
      )}
      {featuredImage && (
        <GatsbyImage
          image={featuredImage}
          alt={mdx.frontmatter.featuredImageAltText}
          className="post-featured-image"
          imgClassName="post-featured-image-img"
        />
      )}
      <MDXProvider components={components}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMM D, YYYY")
        lastUpdated(formatString: "MMM D, YYYY")
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
        openGraphImage: featuredImage {
          childImageSharp {
            gatsbyImageData(width: 1200, height: 630)
          }
        }
        twitterImage: featuredImage {
          childImageSharp {
            gatsbyImageData(width: 1200, height: 628)
          }
        }
        featuredImageAltText
      }
    }
  }
`;

export default PostTemplate;
