import PropTypes from "prop-types";

import React from "react";
import Container from "react-bootstrap/Container";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <footer>
        <hr />
        <Container className="mt-4 mb-4 text-center">
          <IconContext.Provider value={{ size: "42" }}>
            <a className="mx-2" href="https://github.com/pderichai">
              <FaGithub />
            </a>
            <a className="mx-2" href="https://linkedin.com/in/pderichai">
              <FaLinkedin />
            </a>
            <a className="mx-2" href="https://twitter.com/pderichai">
              <FaTwitter />
            </a>
          </IconContext.Provider>
        </Container>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
