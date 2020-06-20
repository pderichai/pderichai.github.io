import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import Nav from "react-bootstrap/Nav"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"

import "katex/dist/katex.min.css"

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({
  data: {
    mdx,
    allMdx: { edges: posts },
  },
}) {
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <Navbar variant="light" bg="white">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link href="/">&larr; Back</Nav.Link>
          </Nav.Item>
          <NavDropdown title="Posts">
            {posts.map(({ node: post }) => {
              return (
                <NavDropdown.Item
                  key={post.frontmatter.title}
                  href={post.fields.slug}
                >
                  {post.frontmatter.title}
                  <span className="text-muted ml-3">
                    {post.frontmatter.date}
                  </span>
                </NavDropdown.Item>
              )
            })}
          </NavDropdown>
        </Nav>
      </Navbar>
      <Container>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>{mdx.frontmatter.title}</h1>
          <h5 className="text-muted">{mdx.frontmatter.date}</h5>
          <h4>{mdx.frontmatter.subtitle}</h4>
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </MDXProvider>
        </Col>
      </Container>
    </Layout>
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
`
