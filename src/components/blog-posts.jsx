import { Link, useStaticQuery, graphql } from "gatsby";

import React from "react";

export default function BlogPosts() {
  const data = useStaticQuery(graphql`
    query blogIndex {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              subtitle
              date(formatString: "MMM D, YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const { edges: posts } = data.allMdx;

  return (
    <ul className="publications-list">
      {posts.map(({ node: post }) => (
        <li key={post.frontmatter.title}>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          <p>{post.frontmatter.date}</p>
        </li>
      ))}
    </ul>
  );
}
