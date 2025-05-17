import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
import amazon from "../../Assets/Projects/amazon.jpg";
import database from "../../Assets/Projects/database.jpg";
import hospital from "../../Assets/Projects/hospital.jpg";
import data from "../../Assets/Projects/data.jpg";
import sql from "../../Assets/Projects/sql.jpg";

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
              imgPath={hospital}
              isBlog={false}
              title="Hospital Emergency Room Analysis."
              description="Cleaned and transformed hospital ER data using Excel and Power Query to identify patterns in patient visits, wait times, and treatment outcomes."
              ghLink="https://github.com/Deepu2002-hue/-Excel_Powerquery-_Hospital_ER"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data}
              isBlog={false}
              title="Sales Data Cleaning"
              description="Cleaned and standardized raw datasets by handling missing values, correcting inconsistencies, and removing duplicates to improve data quality and reliability."
              ghLink="https://github.com/Deepu2002-hue/SQL_DATA_CLEANING-SALES_PROJECT-"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={database}
              isBlog={false}
              title="INVENTORY DATABASE"
              description="Designed and implemented a relational inventory database in SQL Server to manage stock levels, product details, and supplier information efficiently."
              ghLink="https://github.com/Deepu2002-hue/Create_a_Database-_of_Inventory"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              title="SALES STORE ANALYSIS."
              description="Developed a comprehensive SQL Server project involving database design, data manipulation, and complex querying to solve real-world business problems."
              ghLink="https://github.com/Deepu2002-hue/SALES_SQL_PROJECT_END_TO_END"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="AMAZONE SALES STORE ANALYSIS."
              description="Cleaned and transformed Amazon sales data using Power Query and DAX to create dynamic visualizations for tracking KPIs such as total sales, profit margin, and sales trends."
              ghLink="https://github.com/Deepu2002-hue/Amazon_sales_power_bi_project"
            />
          </Col>
                  </Row>
      </Container>
    </Container>
  );
}

export default Projects;
