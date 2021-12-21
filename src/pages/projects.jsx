import Layout from "../components/layout";
import Projects from "../components/projects.jsx";
import React from "react";
import Seo from "../components/seo";

const ProjectsPage = () => (
  <Layout>
    <Seo title="Projects" />
    <Projects />
  </Layout>
);

export default ProjectsPage;
