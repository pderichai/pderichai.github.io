import Layout from "../components/Layout";
import Publications from "../components/Publications";
import Seo from "../components/Seo";

import React from "react";

function PublicationsPage() {
  return (
    <Layout>
      <Seo title="Publications" />
      <Publications />
    </Layout>
  );
}

export default PublicationsPage;
