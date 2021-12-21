import Blog from "../components/blog.jsx";
import Layout from "../components/layout";
import React from "react";
import Seo from "../components/seo";

const BlogPage = () => (
  <Layout>
    <Seo title="Blog" />
    <Blog />
  </Layout>
);

export default BlogPage;
