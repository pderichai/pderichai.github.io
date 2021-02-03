import { useStaticQuery, graphql } from "gatsby";

import React from "react";

export default function ProjectsList() {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsYaml {
        nodes {
          name
          description
          tag
          paper_pdf_link
          paper_pdf_name
          slides_pdf_name
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
  const projects = data.allProjectsYaml.nodes;
  const pdfNamesByLinks = data.allFile.edges.reduce((map, edge) => {
    map[edge.node.name] = edge.node.publicURL;
    return map;
  }, {});

  return (
    <ul className="projects-list">
      {projects.map((project) => (
        <li key={project.name}>
          {project.demo_link ? (
            <a href={project.demo_link}>{project.name}</a>
          ) : (
            <p>{project.name}</p>
          )}
          <p>{project.description}</p>
          {(project.paper_pdf_link || project.paper_pdf_name) && (
            <a
              href={
                project.paper_pdf_link
                  ? project.paper_pdf_link
                  : pdfNamesByLinks[project.paper_pdf_name]
              }
            >
              Paper
            </a>
          )}
          {(project.slides_pdf_link || project.slides_pdf_name) && (
            <a
              href={
                project.slides_pdf_link
                  ? project.slides_pdf_link
                  : pdfNamesByLinks[project.slides_pdf_name]
              }
            >
              Slides
            </a>
          )}
          {project.code_link && <a href={project.code_link}>Code</a>}
        </li>
      ))}
    </ul>
  );
}
