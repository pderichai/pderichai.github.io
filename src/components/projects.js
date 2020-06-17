import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Tab from "react-bootstrap/Tab"
import Nav from "react-bootstrap/Nav"
import Card from "react-bootstrap/Card"

export default function Projects() {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsYaml {
        nodes {
          name
          description
          tag
          affiliation
          links {
            code
          }
          demo
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

  return (
    <Tab.Container defaultActiveKey={projects[0].tag}>
      <Row className="mt-4">
        <Col md={3}>
          <Nav
            variant="pills"
            className="flex-column"
            id="projects-nav"
            aria-orientation="vertical"
          >
            {projects.map(project => {
              return (
                <Nav.Item key={project.name}>
                  <Nav.Link
                    id={project.name}
                    className="h4"
                    eventKey={project.tag}
                    aria-controls={project.tag}
                  >
                    {project.name}
                  </Nav.Link>
                </Nav.Item>
              )
            })}
          </Nav>
        </Col>
        <Col md={9}>
          <Tab.Content>
            {projects.map(project => {
              return (
                <Tab.Pane
                  key={project.name}
                  eventKey={project.tag}
                  id={project.tag}
                  aria-labelledby={project.name}
                >
                  <Card>
                    <Card.Body>
                      <Card.Title>
                        <h4>{project.name}</h4>
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        <h5>{project.description}</h5>
                      </Card.Subtitle>
                      <Card.Text>{project.affiliation}</Card.Text>
                      <hr />
                      <Card.Subtitle className="mb-2 text-muted">
                        Demo
                      </Card.Subtitle>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: project.demo,
                        }}
                      />
                    </Card.Body>
                  </Card>
                </Tab.Pane>
              )
            })}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}
