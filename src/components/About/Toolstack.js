import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  // SiMicrosoftpowerbi,
  SiMicrosoftexcel,
  SiMysql,
  SiTableau,
} from "react-icons/si";
import { BsFillBarChartFill } from "react-icons/bs"; // For Power BI
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <BsFillBarChartFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
    </Row>
  );
}

export default Toolstack;
