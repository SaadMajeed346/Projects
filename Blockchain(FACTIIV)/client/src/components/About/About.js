import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FICO from "../../assets/FICO1.png";

function About() {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className="display-6 pt-4 text-center">
            Credit Score Calculation
          </h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Row>
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/221781256?h=8e696cf692"
              width="100%"
              height="360"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <a
              className="text-center h6 fw-light text-dark"
              href="https://www.myfico.com/credit-education/whats-in-your-credit-score"
              target="_blank"
              rel="noreferrer"
            >
              Read More About FICO
            </a>
          </Row>
        </Col>
        <Col md={6}>
          <img className="w-100 p-4" src={FICO} alt="FICO Chart" />
        </Col>
      </Row>
    </Container>
  );
}

export default About;
