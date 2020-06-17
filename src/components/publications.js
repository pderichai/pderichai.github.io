import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ListGroup from "react-bootstrap/ListGroup"
import Card from "react-bootstrap/Card"

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

  return (
    <ListGroup variant="flush">
      {publications.map(publication => {
        return (
          <ListGroup.Item key={publication.title}>
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
              <h5 className="card-subtitle mb-2 text-muted">
                {publication.venue}
              </h5>
              <p className="card-text">{publication.author}</p>
            </Card.Body>
          </ListGroup.Item>
        )
      })}
    </ListGroup>
  )
}
