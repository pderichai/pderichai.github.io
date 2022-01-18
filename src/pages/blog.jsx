import Blog from "../components/Blog";
import Layout from "../components/Layout";
import React from "react";
import Seo from "../components/Seo";

function BlogPage() {
  return (
    <Layout>
      <Seo title="Blog" />
      <Blog />
    </Layout>
  );
}

export default BlogPage;
