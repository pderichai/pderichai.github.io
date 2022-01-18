import Layout from "../components/Layout";
import Projects from "../components/Projects";
import React from "react";
import Seo from "../components/Seo";

function ProjectsPage() {
  return (
    <Layout>
      <Seo title="Projects" />
      <Projects />
    </Layout>
  );
}

export default ProjectsPage;
