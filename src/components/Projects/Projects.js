import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Replace these with actual images in your Assets/Projects folder
import portfolioImg from "../../Assets/Projects/4p.jpg";
import troviaImg from "../../Assets/Projects/4t1.jpg";
import javashieldImg from "../../Assets/Projects/4js.jpg";
import prepverseImg from "../../Assets/Projects/4prep.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolioImg}
              isBlog={false}
              title="Portfolio"
              description="Ishika's Portfolio is a fully responsive web app built with React, Framer Motion, and Tailwind CSS. It includes animations, smooth routing, and an elegant layout."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={troviaImg}
              isBlog={false}
              title="Trovia"
              description="Trovia is a student-centric opportunity-sharing platform offering real-time updates for internships, hackathons, and competitions — all with peer recommendations."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={javashieldImg}
              isBlog={false}
              title="JavaShield"
              description="JavaShield secures sensitive files using OTP-based encryption, featuring a clean desktop interface and essential options like sign-up, file lock/unlock, and more."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prepverseImg}
              isBlog={false}
              title="Prepverse.AI"
              description="Prepverse.AI is a modern learning platform that integrates React, LlamaIndex, LangChain, Django, Firebase, and Tailwind to provide AI-driven personalized preparation experiences."
              ghLink="#"
              demoLink="#"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
