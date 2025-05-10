import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dipanshu Suman </span>
            from <span className="purple"> New Delhi, India.</span>
            <br />
            Let's connect — I'm open to internship or entry-level opportunities where I can contribute and grow as a data professional.
            <br />
            I have completed B.Com from Delhi University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Spritual Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Strive to uncover insights that drive informed decisions!"{" "}
          </p>
          <footer className="blockquote-footer">Dipanshu</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
