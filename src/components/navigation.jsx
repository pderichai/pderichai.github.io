import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

import React from "react";

export default function Navigation() {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);
  const links = data.site.siteMetadata.menuLinks;

  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={link.name}>
            <Link to={link.link} activeClassName="active">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
