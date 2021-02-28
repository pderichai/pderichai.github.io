import Blog from "../components/blog.jsx";
import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";

const BlogPage = () => (
  <Layout>
    <SEO />
    <Blog />
  </Layout>
);

export default BlogPage;
