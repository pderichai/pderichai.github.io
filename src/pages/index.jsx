import Layout from "../components/layout";
import React from "react";
import resume from "../assets/pdfs/resume.pdf";
import SEO from "../components/seo";

const HomePage = () => (
  <Layout>
    <SEO />
    <main>
      <p>
        I'm a software engineer at Google working on semantic parsing and
        question answering for Search.
      </p>
      <p>
        Prior to Google, I obtained my B.S. and M.S. from the{" "}
        <a href="https://www.washington.edu/" target="_blank" rel="noreferrer">
          University of Washington
        </a>
        , where I was advised by{" "}
        <a
          href="https://homes.cs.washington.edu/~nasmith/"
          target="_blank"
          rel="noreferrer"
        >
          Noah Smith
        </a>
        . I've previously worked on{" "}
        <a
          href="https://github.com/Unity-Technologies/ml-agents"
          target="_blank"
          rel="noreferrer"
        >
          machine learning in a game engine
        </a>{" "}
        at{" "}
        <a href="https://unity3d.ai/" target="_blank" rel="noreferrer">
          Unity Technologies
        </a>
        ,{" "}
        <a
          href="https://www.youtube.com/watch?v=pqFGZB8KCnQ"
          target="_blank"
          rel="noreferrer"
        >
          training autonomous robots in simulation
        </a>{" "}
        at{" "}
        <a href="http://www.nvidia.com/" target="_blank" rel="noreferrer">
          NVIDIA
        </a>
        , and a deep learning framework for speech recognition at{" "}
        <a
          href="https://www.amazon.jobs/en/teams/alexa-ai/"
          target="_blank"
          rel="noreferrer"
        >
          Amazon Alexa AI
        </a>
        . For more details, see my{" "}
        <a href={resume} target="_blank" rel="noreferrer">
          resume
        </a>
        .
      </p>
    </main>
  </Layout>
);

export default HomePage;
