import Blog from "../components/Blog";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

import React from "react";

function BlogPage() {
  return (
    <Layout>
      <Seo title="Blog" />
      <Blog />
    </Layout>
  );
}

export default BlogPage;
