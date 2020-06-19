import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export default function BlogPosts() {
  const data = useStaticQuery(graphql`
    query blogIndex {
      allMdx {
        edges {
          node {
            id
            excerpt
            frontmatter {
              title
              subtitle
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const { edges: posts } = data.allMdx

  return posts.map(({ node: post }) => {
    return (
      <Card className="my-3" key={post.frontmatter.title}>
        <Card.Body>
          <Card.Title>
            <Link to={post.fields.slug}>
            <h4>
                {post.frontmatter.title}
            </h4>
            </Link>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {post.frontmatter.subtitle}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    )
  })
}
