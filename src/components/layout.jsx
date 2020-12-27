import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.scss";

import { Link } from "gatsby";
import Navigation from "../components/navigation.jsx";
import PropTypes from "prop-types";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h1 className="site-header">
          <Link to="/">Deric Pang</Link>
        </h1>
      </header>
      <Navigation />
      <main>{children}</main>
      <footer>
        <ul>
          <li>
            <a
              href="https://github.com/pderichai"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://scholar.google.com/citations?user=ktSbCsoAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/pderichai"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/pderichai"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
