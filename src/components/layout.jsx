import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.scss";

import { Link } from "gatsby";
import Navigation from "../components/navigation.jsx";
import PropTypes from "prop-types";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="site-header">
        <Link to="/">Deric Pang</Link>
      </h1>
      <Navigation />
      {children}
      <footer>
        <ul>
          <li>
            <a
              href="https://twitter.com/pderichai"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          </li>
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
              href="https://linkedin.com/in/pderichai"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
