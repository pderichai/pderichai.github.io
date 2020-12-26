import Layout from "../components/layout";
import PublicationsList from "../components/publications-list.jsx";
import React from "react";
import SEO from "../components/seo";

const PublicationsPage = () => (
  <Layout>
    <SEO />
    <main>
      <PublicationsList />
    </main>
  </Layout>
);

export default PublicationsPage;
