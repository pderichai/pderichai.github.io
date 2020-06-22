import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Card from "react-bootstrap/Card";

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

  return posts.map(({ node: post }) => {
    return (
      <Card className="my-3" key={post.frontmatter.title}>
        <Card.Body>
          <Card.Title>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {post.frontmatter.date}
          </Card.Subtitle>
          <Card.Text>{post.frontmatter.subtitle}</Card.Text>
        </Card.Body>
      </Card>
    );
  });
}
