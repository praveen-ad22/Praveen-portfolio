import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import stackoverflow from "../assets/projects/stackoverflow.jpg";
import vartalap from "../assets/projects/Vartalap.png";
import ASocial from "../assets/projects/ASocial.png"

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vartalap}
              isBlog={false}
              title="Leads Tracker"
              description="Leads Tracker is a Chrome extension developed by me that helps users store and manage links for later revisiting. It is designed for individuals who frequently come across important websites, resources, or leads but need an easy way to save and access them later."
              ghLink="https://github.com/praveen-ad22/chromeextension-_Leadstracker"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stackoverflow}
              isBlog={false}
              title="Task Manager"
              description="A Task Manager is a productivity tool designed to help users create, organize, track, and complete tasks efficiently. It is useful for individuals and teams to manage workloads, set priorities, and meet deadlines."
              ghLink="https://github.com/praveen-ad22/Task_manager"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ASocial}
              isBlog={false}
              title="Review Scheduling System"
              description="The Review Scheduling System is a web-based application designed to help users efficiently schedule, manage, and track reviews or feedback sessions. It is particularly useful for educational institutions, companies, and project teams where periodic evaluations are necessary."
              ghLink="https://github.com/praveen-ad22/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  )
}

export default Projects