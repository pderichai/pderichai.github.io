import "bootstrap/dist/css/bootstrap.min.css";
import "./layout.scss";

import { Link } from "gatsby";
import Navigation from "../components/navigation.jsx";
import PropTypes from "prop-types";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="header">
        <Link to="/">Deric Pang</Link>
      </div>
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
