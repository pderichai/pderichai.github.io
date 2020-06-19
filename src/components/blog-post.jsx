import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Container>
      <Col md={{ span: 8, offset: 2 }}>
        <h1>{mdx.frontmatter.title}</h1>
        <h5 className="text-muted">{mdx.frontmatter.subtitle}</h5>
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </Col>
    </Container>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        subtitle
      }
    }
  }
`
