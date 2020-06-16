import ListGroup from 'react-bootstrap/ListGroup'
import { useStaticQuery, graphql } from "gatsby"

import React from "react"

export default function Publications() {
  const data = useStaticQuery(graphql`
    query PublicationsQuery {
      allPublicationsYaml {
        nodes {
          author
          title
          venue
        }
      }
    }
  `)

  const nodes = data.allPublicationsYaml.nodes

  const items = []

  for (const [index, node] of nodes.entries()) {
    items.push(
          <div className="card list-group-item">
            <div className="card-body">
              <h4 className="card-title">
                title
              </h4>
              <h5 className="card-subtitle mb-2 text-muted">
                venue
              </h5>
              <p className="card-text">author</p>
            </div>
          </div>
    )
  }

  return (
    <ListGroup variant="flush">
          <div className="card list-group-item">
            <div className="card-body">
              <h4 className="card-title">
                title
              </h4>
              <h5 className="card-subtitle mb-2 text-muted">
                venue
              </h5>
              <p className="card-text">author</p>
            </div>
          </div>
    </ListGroup>
  )
}
