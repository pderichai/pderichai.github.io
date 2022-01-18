import Layout from "../components/Layout";
import Publications from "../components/Publications";
import React from "react";
import Seo from "../components/Seo";

function PublicationsPage() {
  return (
    <Layout>
      <Seo title="Publications" />
      <Publications />
    </Layout>
  );
}

export default PublicationsPage;
