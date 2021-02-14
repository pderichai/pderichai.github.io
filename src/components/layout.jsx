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
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
