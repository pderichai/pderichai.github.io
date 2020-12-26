import { graphql } from "gatsby";
import "katex/dist/katex.min.css";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import SEO from "../components/seo";

const MyH1 = (props) => (
  <h2 className="blog-post" {...props}>
    {props.children}
  </h2>
);
const MyH2 = (props) => (
  <h3 className="blog-post" {...props}>
    {props.children}
  </h3>
);
const MyP = (props) => (
  <p className="blog-post" {...props}>
    {props.children}
  </p>
);
const MyPre = (props) => (
  <pre className="blog-post" {...props}>
    {props.children}
  </pre>
);

const components = {
  h1: MyH1,
  h2: MyH2,
  p: MyP,
  pre: MyPre,
};

export default function PostTemplate({
  data: {
    mdx,
    allMdx: { edges: posts },
  },
}) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <main className="blog-post">
        <h1 className="blog-title">{mdx.frontmatter.title}</h1>
        <p className="blog-date">{mdx.frontmatter.date}</p>
        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        subtitle
        date(formatString: "MMM D, YYYY")
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM D, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
