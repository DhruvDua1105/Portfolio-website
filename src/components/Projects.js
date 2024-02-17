import React from "react";
import { Container, Row, Col, Tab, Nav, Image } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import { AchievementCards } from "./AchievementCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import payr from "../assets/img/payr.png";
import textUtils from "../assets/img/text-utils.png";
import cyient from "../assets/img/cyeintWinner.png";
import lichess from "../assets/img/lichess3.png";
import kanban from "../assets/img/kanban.png";
import portfolio from "../assets/img/portfolio.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      ind: 0,
      title: "Payr Landing Page",
      description: "Design & Development of Landing Page and the creation of student and mentor dashboard.",
      imgUrl: payr,
    },
    {
      ind: 1,
      title: "Text Utils",
      description: "App serving the functionality of text manipulation according to the user",
      imgUrl: textUtils,
    },
    {
      ind: 2,
      title: "LichessAPI- Top Chess Players",
      description: "Results of the top 50 chess players around the world and their rating history",
      imgUrl: lichess,
    },
    {
      ind: 3,
      title: "Kanban Board",
      description: "Displaying the tasks assigned to the employees according to their custom view (by Priority, Alphabetically, Title)",
      imgUrl: kanban,
    },
    {
      ind: 4,
      title: "Portfolio Website",
      description: "Design & Development of personal portfolio website",
      imgUrl: portfolio,
    },
  ];
  const achievements = [
    {
      ind: 0,
      title: "CyientifIQ Global Hackathon",
      description: "Winner of the CyientifIQ Innovation League Global Hackathon under the theme ‘Solving Sustainability Challenges’ out of 5536 teams all over the world.",
      imgUrl: cyient,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility offset={500}>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects and Achievements</h2>
                  <p>
                    Here are a few technical projects and achievements from hackathons that I've been involved in during my college journey.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">My Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Achievements</Nav.Link>
                </Nav.Item>
              </Nav>
              <TrackVisibility offset={1000} partialVisibility>
                {({ isVisible }) => (
                  <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => {
                          return (
                            <Col className="d-flex" key={index} xs={12} md={6} lg={4}>
                              <ProjectCards {...project} />
                            </Col>
                          );
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row className="justify-content-center">
                        {achievements.map((achievement, index) => {
                          return (
                            <Col key={index} xs={12} md={8} lg={4}>
                              <AchievementCards {...achievement} />
                            </Col>
                          );
                        })}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                )}
              </TrackVisibility>

            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="Image" className="background-img-right" />
    </section>
  );
};
