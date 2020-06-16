import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"
import Nav from "react-bootstrap/Nav"
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import TabContainer from 'react-bootstrap/TabContainer'
import ListGroup from 'react-bootstrap/ListGroup'

import Layout from "../components/layout"
import SEO from "../components/seo"
import PreviouslyBlurbs from "../components/previously-blurbs"
import Publications from "../components/publications"
import profile from "../images/profile.jpg"
import resume from "../assets/resume.pdf"

import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { IconContext } from "react-icons"

import "bootstrap/dist/css/bootstrap.min.css"

const HomePage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Helmet>
      <meta charset="utf-8" />
      <title>Deric's Homepage</title>
      <meta
        name="description"
        content="I'm Deric, and I'm a software engineer at Google."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
    <Container className="mt-4 mb-4">
      <Row>
        <Col className="my-auto">
          <div id="about-content">
            <p className="text-justify">
              I'm Deric, and I'm a software engineer at Google working on
              commonsense knowledge and reasoning. I'm interested in natural
              language processing, machine learning, and software engineering.
              Here's my{" "}
              <a href={resume} target="_blank">
                resume
              </a>
              .
            </p>
            <p className="text-justify">
              Outside of computer science, I enjoy playing violin and tennis.
            </p>
            <PreviouslyBlurbs />
          </div>
        </Col>
        <Col sm={4} className="text-center">
          <Image
            src={profile}
            fluid
            roundedCircle
            className="mb-2"
            alt="Deric"
          />
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

    <Container>
      <TabContainer
        defaultActiveKey="blog-content"
      >
        <Nav
          variant="tabs"
          className="flex-column flex-md-row"
        >
        <Nav.Item>
          <Nav.Link
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
              className="h3"
              eventKey="publications-content"
              aria-selected="true"
              aria-controls="publications-content"
            >
              Publications
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContent>
          <TabPane
            eventKey="blog-content"
            aria-labelledby="blog-tab"
          >
            <div className="list-group list-group-flush">
              {/*
              {% for post in site.posts %}
                <div className="card list-group-item">
                  <div className="card-body">
                    <h4>
                      <a
                        className="card-title" href="{{ post.url }}"
                        >{{ post.title }}</a
                      >
                    </h4>
                    <h5 className="card-subtitle text-muted mb-2">
                      {{ post.date | date_to_string }}
                    </h5>
                    <p className="card-text">
                      {{ post.subtitle }}
                    </p>
                  </div>
                </div>
              {% endfor %}
              */}
            </div>
          </TabPane>

          <TabPane
            eventKey="projects-content"
            aria-labelledby="projects-tab"
          >
            <div className="row mt-4">
              <div className="col-md-3">
                <div
                  className="nav flex-column nav-pills"
                  id="projects-nav"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {/*
                  {% for project in site.data.projects %}
                    <a
                      {% if project.active %}
                        className="h4 nav-link active"
                      {% else %}
                        className="h4 nav-link"
                      {% endif %}
                      id="{{ project.name }}"
                      data-toggle="list"
                      href="{{ "#list-" | append: project.tag }}"
                      role="tab"
                      aria-controls="{{ project.tag }}"
                      >{{ project.name }}</a
                    >
                  {% endfor %}
                  */}
                </div>
              </div>
              <div className="col-md-9">
                <TabContent>
                  {/*
                  {% for project in site.data.projects %}
                    <div
                      {% if project.active %}
                        className="tab-pane fade show active"
                      {% else %}
                        className="tab-pane fade"
                      {% endif %}
                      id="{{ "list-" | append: project.tag }}"
                      role="tabpanel"
                      aria-labelledby="{{ project.tag }}"
                    >
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">
                            {{ project.name }}
                          </h4>
                          <h5 className="card-subtitle mb-2 text-muted">
                            {{ project.description }}
                          </h5>
                          <p className="card-text">
                            Work done at {{ project.affiliation }}.
                          </p>
                          {% for link in project.links %}
                            <a
                              href="{{ link[1] }}"
                              className="card-link"
                              target="_blank"
                              >{{ link[0] }}</a
                            >
                          {% endfor %}
                          {% if project.demo %}
                            <hr/>
                            <h5 className="card-subtitle mb-2 text-muted">Demo</h5>
                            {{ project.demo }}
                          {% endif %}
                        </div>
                      </div>
                    </div>
                  {% endfor %}
                  */}
                </TabContent>
              </div>
            </div>
          </TabPane>
          <TabPane
            eventKey="publications-content"
            //aria-labelledby="publications-tab"
          >
            <Publications />
          </TabPane>
        </TabContent>
      </TabContainer>
    </Container>
  </Layout>
)

export default HomePage
