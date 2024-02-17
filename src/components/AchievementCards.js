import React from "react";
import { Col } from "react-bootstrap";

export const AchievementCards = ({ ind, title, description, imgUrl }) => {
  let buttonText = "";
  let buttonLink = "";

  switch (ind) {
    case 0:
      buttonText = "Code and Github Repository";
      buttonLink = "https://github.com/DhruvDua1105/CyientifIQ_yash3518_251e";
      break;
    default:
      buttonText = "Code";
      buttonLink = "#";
      break;
  }

  return (
    <Col>
      <div className="proj-imgbx">
        <div className="temp">
          <img src={imgUrl} alt="" height="233px" width="222px" />
        </div>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <span className="project-text">
        <button ><a href={buttonLink} target="_blank">{buttonText}</a></button>
      </span>
    </Col>
  );
};