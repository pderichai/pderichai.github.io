import Layout from "../components/layout";
import ProjectsList from "../components/projects-list.jsx";
import React from "react";
import SEO from "../components/seo";

const ProjectsPage = () => (
  <Layout>
    <SEO />
    <ProjectsList />
  </Layout>
);

export default ProjectsPage;
