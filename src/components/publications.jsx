import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function PublicationsList() {
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
  `);
  const publications = data.allPublicationsYaml.nodes;
  const pdfNamesByLinks = data.allFile.edges.reduce((map, edge) => {
    map[edge.node.name] = edge.node.publicURL;
    return map;
  }, {});

  return (
    <ul className="publications">
      {publications.map((publication) => (
        <li key={publication.title}>
          <a
            href={
              publication.pdf_link
                ? publication.pdf_link
                : pdfNamesByLinks[publication.pdf_name]
            }
          >
            {publication.title}
          </a>
          <p>{publication.author}</p>
          <p>{publication.venue}</p>
          {publication.code_link && <a href={publication.code_link}>Code</a>}
          {publication.demo_link && <a href={publication.demo_link}>Demo</a>}
        </li>
      ))}
    </ul>
  );
}

export default PublicationsList;
