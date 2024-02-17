import React from "react";
import html from "../assets/img/html-logo.svg";
import css from "../assets/img/css-3-svgrepo-com.svg";
import js from "../assets/img/javascript-svgrepo-com.svg";
import reactJS from "../assets/img/reactjs-svgrepo-com.svg";
import tailwind from "../assets/img/tailwindcss-icon-svgrepo-com.svg";
import bootstrap from "../assets/img/bootstrap-svgrepo-com.svg";
import nodejs from "../assets/img/nodejs-icon-svgrepo-com.svg";
import mongodb from "../assets/img/mongodb-svgrepo-com.svg";
import illustrator from "../assets/img/illustrator.svg";
import photoshop from "../assets/img/photoshop.svg";
import c from "../assets/img/c.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import "animate.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx animate__animated animate__zoomIn">
              <h2>Tech Stack</h2>
              <p>
              I've learned and implemented a range of skills and technologies in the development world. From <b>Front-end</b>, <b>Back-end</b> to Graphic Designing. 
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                autoPlay={true}
                autoPlaySpeed={1000}
              >
                <div className="item">
                  <img src={c} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={reactJS} alt="Image" />
                  <h5>ReactJS</h5>
                </div>
                <div className="item">
                  <img src={tailwind} alt="Image" />
                  <h5>Tailwind CSS</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="Image" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={illustrator} alt="Image" />
                  <h5>Illustrator</h5>
                </div>
                <div className="item">
                  <img src={photoshop} alt="Image" />
                  <h5>Photoshop</h5>
                </div>
              </Carousel>

            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="Image" className="background-image-left" />
    </section>
  );
};
