import BlogPosts from "../components/blog-posts.jsx";
import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";

const BlogPage = () => (
  <Layout>
    <SEO />
    <BlogPosts />
  </Layout>
);

export default BlogPage;
