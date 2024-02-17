import React from "react";
import { Col } from "react-bootstrap";
import tailwind from "../assets/img/tailwindcss-icon-svgrepo-com.svg"

export const ProjectCards = ({ ind, title, description, imgUrl }) => {
  let buttonText = "";
  let buttonLink = "";

  switch (ind) {
    case 0:
      buttonText = "Deployed Link";
      buttonLink = "https://payr.org.in/";
      break;
    case 1:
      buttonText = "Code";
      buttonLink = "https://github.com/DhruvDua1105/Text-Utils";
      break;
    case 2:
      buttonText = "Code";
      buttonLink = "https://github.com/DhruvDua1105/Lichess-Backend";
      break;
    case 3:
      buttonText = "Deployed Link";
      buttonLink = "https://kanbanboard-quicksell-deeea.web.app/";
      break;
    case 4:
      buttonText = "Deployed Link";
      buttonLink = "/";
      break;
    default:
      buttonText = "Code";
      buttonLink = "#";
      break;
  }

  return (
    <Col>
      <div className="proj-imgbx">
        <div>
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