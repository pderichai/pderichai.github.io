import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Seo from "../components/Seo";

import React from "react";

function ProjectsPage() {
  return (
    <Layout>
      <Seo title="Projects" />
      <Projects />
    </Layout>
  );
}

export default ProjectsPage;
