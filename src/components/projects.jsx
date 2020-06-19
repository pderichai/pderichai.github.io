import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"

export default function Projects() {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsYaml {
        nodes {
          name
          description
          tag
          affiliation
          paper_pdf_link
          paper_pdf_name
          slides_pdf_name
          code_link
          video_link
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
  const projects = data.allProjectsYaml.nodes
  const pdfNamesByLinks = data.allFile.edges.reduce((map, edge) => {
    map[edge.node.name] = edge.node.publicURL
    return map
  }, {})

  return projects.map(project => {
    return (
      <Card className="my-3" bg="light" key={project.name}>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Card.Body>
              <Card.Title>
                <h4>{project.name}</h4>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h5>{project.description}</h5>
              </Card.Subtitle>
              <Card.Text>{project.affiliation}</Card.Text>
              {(project.paper_pdf_link || project.paper_pdf_name) && (
                <Button
                  className="mr-2"
                  variant="info"
                  size="sm"
                  href={
                    project.paper_pdf_link
                      ? project.paper_pdf_link
                      : pdfNamesByLinks[project.paper_pdf_name]
                  }
                >
                  paper
                </Button>
              )}
              {project.code_link && (
                <Button
                  className="mr-2"
                  variant="warning"
                  size="sm"
                  href={project.code_link}
                >
                  code
                </Button>
              )}
              {project.demo_link && (
                <Button variant="danger" size="sm" href={project.demo_link}>
                  demo
                </Button>
              )}
            </Card.Body>
          </ListGroup.Item>
          {project.video_link && (
            <ListGroup.Item>
              <Card.Body>
                <div class="row mt-4 mb-4">
                  <iframe
                    title={project.name}
                    className="mx-auto rounded"
                    width="560"
                    height="315"
                    src={project.video_link}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Card.Body>
            </ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    )
  })
}
