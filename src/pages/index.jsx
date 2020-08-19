import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PreviouslyBlurbs from "../components/previously-blurbs";
import Publications from "../components/publications";
import Projects from "../components/projects";
import BlogPosts from "../components/blog-posts";
import ProfilePic from "../components/profile-pic";
import resume from "../assets/pdfs/resume.pdf";

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HomePage = () => (
  <Layout>
    <SEO title="Home" />
          <Container className="mt-4 mb-4">
            <Row>
              <Col className="my-auto">
                <div id="about-content">
                  <h3>Hi! I'm Deric.</h3>
                  <p className="text-justify">
                    I'm a software engineer at Google working on commonsense
                    knowledge and reasoning. I'm interested in natural language
                    processing, machine learning, and software engineering.
                    Here's my <a href={resume}>resume</a>.
                  </p>
                  <p className="text-justify">
                    Outside of computer science, I enjoy playing violin and
                    tennis.
                  </p>
                  <PreviouslyBlurbs />
                </div>
              </Col>
              <Col sm={4} className="text-center">
                <Col xl={{ span: 8, offset: 2 }}>
                  <ProfilePic />
                </Col>
                <IconContext.Provider value={{ size: "42" }}>
                  <a className="mx-2" href="https://github.com/pderichai">
                    <FaGithub />
                  </a>
                  <a className="mx-2" href="https://linkedin.com/in/pderichai">
                    <FaLinkedin />
                  </a>
                  <a className="mx-2" href="https://twitter.com/pderichai">
                    <FaTwitter />
                  </a>
                </IconContext.Provider>
              </Col>
            </Row>
          </Container>
          <Container className="mt-5">
            <Tab.Container defaultActiveKey="blog-content">
              <Nav justify variant="tabs" className="flex-column flex-md-row">
                <Nav.Item>
                  <Nav.Link
                    id="blog-tab"
                    className="h3"
                    eventKey="blog-content"
                    aria-selected="true"
                    aria-controls="blog-content"
                  >
                    Blog
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    id="projects-tab"
                    className="h3"
                    eventKey="projects-content"
                    aria-selected="false"
                    aria-controls="projects-content"
                  >
                    Projects
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    id="publications-tab"
                    className="h3"
                    eventKey="publications-content"
                    aria-selected="true"
                    aria-controls="publications-content"
                  >
                    Publications
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane
                  id="blog-content"
                  eventKey="blog-content"
                  aria-labelledby="blog-tab"
                >
                  <BlogPosts />
                </Tab.Pane>

                <Tab.Pane
                  id="projects-content"
                  eventKey="projects-content"
                  aria-labelledby="projects-tab"
                >
                  <Projects />
                </Tab.Pane>
                <Tab.Pane
                  id="publications-content"
                  eventKey="publications-content"
                  aria-labelledby="publications-tab"
                >
                  <Publications />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Container>
  </Layout>
);

export default HomePage;
