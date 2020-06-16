import ListGroup from 'react-bootstrap/ListGroup'
import { useStaticQuery, graphql } from "gatsby"

import React, { useEffect } from "react"

export default function Publications() {
  const [index, setIndex] = React.useState(0)
  let start = null

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

  return (
    <ListGroup variant="flush">
      {nodes.map((node, index) => {
        return (
          <div className="card list-group-item">
            <div className="card-body">
              <h4 className="card-title">
                {node.title}
              </h4>
              <h5 className="card-subtitle mb-2 text-muted">
                {node.venue}
              </h5>
              <p className="card-text">{node.author}</p>
            </div>
          </div>
        )})}
    </ListGroup>
  )
}
