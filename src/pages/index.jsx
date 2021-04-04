import Layout from "../components/layout";
import React from "react";
import resume from "../assets/pdfs/resume.pdf";
import Seo from "../components/seo";

const HomePage = () => (
  <Layout>
    <Seo />
    <p>
      I'm a software engineer at Google working on semantic parsing and question
      answering for Search.
    </p>
    <p>
      Prior to Google, I obtained my B.S. and M.S. from the{" "}
      <a href="https://www.washington.edu/">University of Washington</a>, where
      I was advised by{" "}
      <a href="https://homes.cs.washington.edu/~nasmith/">Noah Smith</a>. I've
      previously worked on{" "}
      <a href="https://github.com/Unity-Technologies/ml-agents">
        machine learning in a game engine
      </a>{" "}
      at <a href="https://unity3d.ai/">Unity Technologies</a>,{" "}
      <a href="https://www.youtube.com/watch?v=pqFGZB8KCnQ">
        training autonomous robots in simulation
      </a>{" "}
      at <a href="http://www.nvidia.com/">NVIDIA</a>, and a deep learning
      framework for speech recognition at{" "}
      <a href="https://www.amazon.jobs/en/teams/alexa-ai/">Amazon Alexa AI</a>.
    </p>
    <div className="about-links">
      <ul>
        <li>
          <a href="https://github.com/pderichai">GitHub</a>
        </li>
        <li>
          <a href="https://scholar.google.com/citations?user=ktSbCsoAAAAJ&hl=en">
            Google Scholar
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/pderichai">LinkedIn</a>
        </li>
        <li>
          <a href={resume}>Resume</a>
        </li>
        <li>
          <a href="https://twitter.com/pderichai">Twitter</a>
        </li>
      </ul>
    </div>
  </Layout>
);

export default HomePage;
