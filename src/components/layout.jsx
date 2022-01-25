import "./Layout.scss";
import Navigation from "../components/Navigation";

import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

function Layout({ children }) {
  return (
    <>
      <header>
        <h1 className="site-header">
          <Link to="/">Deric Pang</Link>
        </h1>
      </header>
      <Navigation />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
