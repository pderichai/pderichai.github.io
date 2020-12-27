import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

import React from "react";
import PropTypes from "prop-types";

export default function Navigation({ separator }) {
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
            {index !== 0 && separator + " "}
            <Link to={link.link} activeClassName="active">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navigation.defaultProps = {
  separator: `•`,
};

Navigation.propTypes = {
  separator: PropTypes.string,
};
