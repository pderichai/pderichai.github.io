import Layout from "../components/layout";
import Publications from "../components/publications.jsx";
import React from "react";
import Seo from "../components/seo";

const PublicationsPage = () => (
  <Layout>
    <Seo title="Publications" />
    <Publications />
  </Layout>
);

export default PublicationsPage;
