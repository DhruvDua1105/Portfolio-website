import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/leetcode-svgrepo-com.svg";
import navIcon3 from "../assets/img/GitHub-Icon-White-Logo.wine.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={5} lg={3} className="text-center text-lg-start text-md-start">
            <h6>EMAIL</h6>
            <span>dhruv.dua.NSUT2024@gmail.com
            </span>
          </Col>
          <Col xs={12} md={3} lg={3} className="text-center text-lg-start text-md-start">
            <h6>CALL</h6>
            <span>+91-9205762346</span>
          </Col>
          <Col md={4} lg={6} className="text-center text-lg-end text-md-end">
            <div className="footer-icon">
              <a href="https://www.linkedin.com/in/dhruv-dua-047893192/" target="_blank" rel="noreferrer">
                <img src={navIcon1} alt="" />
              </a>
              <a href="http://leetcode.com/ddhruvdua/" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://github.com/DhruvDua1105" target="_blank" rel="noreferrer">
                <img src={navIcon3} alt="" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
