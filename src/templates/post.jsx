import { graphql } from "gatsby";
import "katex/dist/katex.min.css";
import Layout from "../components/layout";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import SEO from "../components/seo";

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
const MyCode = (props) => (
  <code className="post" {...props}>
    {props.children}
  </code>
);
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
  code: MyCode,
  pre: MyPre,
  ol: MyOl,
};

export default function PostTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <main className="post">
        <h2 className="post-title">{mdx.frontmatter.title}</h2>
        <p className="post-date">{mdx.frontmatter.date}</p>
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
        date(formatString: "MMM D, YYYY")
      }
    }
  }
`;
