import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
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
          <ListGroup.Item className="p-0">
            <Card.Body>
              <Card.Title>{project.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {project.affiliation}
              </Card.Subtitle>
              <Card.Text>{project.description}</Card.Text>
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
              {(project.slides_pdf_link || project.slides_pdf_name) && (
                <Button
                  className="mr-2"
                  variant="success"
                  size="sm"
                  href={
                    project.slides_pdf_link
                      ? project.slides_pdf_link
                      : pdfNamesByLinks[project.slides_pdf_name]
                  }
                >
                  slides
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
            <ListGroup.Item className="p-0">
              <Card.Body>
                <Row>
                  <iframe
                    title={project.name}
                    className="mx-auto rounded border-0 "
                    width="560"
                    height="315"
                    src={project.video_link}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Row>
              </Card.Body>
            </ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    )
  })
}
