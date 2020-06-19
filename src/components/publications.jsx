import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export default function Publications() {
  const data = useStaticQuery(graphql`
    query PublicationsQuery {
      allPublicationsYaml {
        nodes {
          title
          author
          venue
          pdf_link
          pdf_name
          code_link
          demo_link
        }
      }
      allFile(filter: { sourceInstanceName: { eq: "pdfs" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `)
  const publications = data.allPublicationsYaml.nodes
  const pdfNamesByLinks = data.allFile.edges.reduce((map, edge) => {
    map[edge.node.name] = edge.node.publicURL
    return map
  }, {})

  return publications.map(publication => {
    return (
      <Card className="my-3" key={publication.title}>
        <Card.Body>
          <Card.Title>
            <h4>
              <a
                href={
                  publication.pdf_link
                    ? publication.pdf_link
                    : pdfNamesByLinks[publication.pdf_name]
                }
              >
                {publication.title}
              </a>
            </h4>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {publication.venue}
          </Card.Subtitle>
          <Card.Text>{publication.author}</Card.Text>
          <Button
            className="mr-2"
            variant="info"
            size="sm"
            href={
              publication.pdf_link
                ? publication.pdf_link
                : pdfNamesByLinks[publication.pdf_name]
            }
          >
            pdf
          </Button>
          {publication.code_link && (
            <Button
              className="mr-2"
              variant="warning"
              size="sm"
              href={publication.code_link}
            >
              code
            </Button>
          )}
          {publication.demo_link && (
            <Button variant="danger" size="sm" href={publication.demo_link}>
              demo
            </Button>
          )}
        </Card.Body>
      </Card>
    )
  })
}
