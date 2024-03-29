import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import bannerImg from "../assets/img/Dhruv-Dua.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(170 - Math.random() * 100);
  const toRotate = [
    "Full-Stack Developer",
    "Front-end Developer",
    "Back-end Developer",
    "C++ Programmer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(90);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center ">
          <Col xs={12} md={12} xl={7}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>
                    {`Hi, I'm Dhruv Dua`}
                    <span className="wave">👋</span> <br />
                    <span
                      className="txt-rotate"
                      data-period="500"
                      data-rotate='["Full Stack Developer","Front-end Developer", "Back-end Developer", "C++ Programmer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Hi, I am <b> Dhruv Dua </b>, an Engineering Undergraduate at <b> Netaji Subhas University of Technology, New-Delhi</b>.<br />
                    I am a passionate web developer with expertise in <b>JavaScript</b>, <b>ReactJS</b>, <b>Node.js</b>, and <b>MongoDB</b>. I am also proficient in <b>C++</b> programming. <br /> I am always eager to learn new technologies and tools to improve my skills and build high-quality software. <br />
                    Apart from coding, I like to play Badminton, Volleyball, and video games.
                  </p>
                  <button onClick={() => window.open("https://www.linkedin.com/in/dhruv-dua-047893192/", "_blank")}>
                    Let's connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={12} xl={5} className="d-flex justify-content-center align-items-center" style={{ overflow: "hidden" }}>
            <div className="customimg" style={{ margin:"20px", width: "320px", height: "320px", border: '3px solid white', borderRadius: "50%", backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: '50% 0%' }}></div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
