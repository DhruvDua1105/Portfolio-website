import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo-dhruv.svg";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/leetcode-svgrepo-com.svg";
import navIcon3 from "../assets/img/GitHub-Icon-White-Logo.wine.svg";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" className="logo">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "Skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Tech Stack
              </Nav.Link>
              <Nav.Link
                href="#project"
                className={
                  activeLink === "Projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/dhruv-dua-047893192/" target="_blank">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="http://leetcode.com/ddhruvdua/" target="_blank">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://github.com/DhruvDua1105" target="_blank">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <button>
                <a href="https://bit.ly/DhruvDua_resume_NSUT2024" target="_blank">Resume</a>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
