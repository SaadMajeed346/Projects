import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsEnvelopeFill,
  BsFacebook,
  BsFillTelephoneFill,
  BsHouseFill,
  BsLinkedin,
  BsSkype,
  BsTwitter,
} from "react-icons/bs";

function Footer() {
  return (
    <Container fluid className="mt-5 p-4 footer text-white">
      <Row>
        <Col sm={4}>
          <h5>Factiiv</h5>
          <p>
            A Decentralized Application on Ethereum Blockchain with
            decentralized login system
          </p>
        </Col>
        <Col sm={4}>
          <p className="footerHeading">Services</p>
          <p>Identity of participants are hidden</p>
          <p>Verify the document</p>
          <p>Calculate credit score</p>
        </Col>
        <Col sm={4}>
          <p className="footerHeading">Contact</p>
          <p>
            <BsHouseFill className="me-3" /> C1-227 Bahria town, Lahore
          </p>
          <p>
            <BsFillTelephoneFill className="me-3" /> +92 3348623789
          </p>
          <p>
            <BsEnvelopeFill className="me-3" />
            F21BS90@ucp.edu.pk
          </p>
        </Col>
      </Row>
      <div className="text-center">
        <BsLinkedin className="d-inline-block me-3" />
        <BsSkype className="d-inline-block me-3" />
        <BsFacebook className="d-inline-block me-3" />
        <BsTwitter className="d-inline-block" />
      </div>
      <hr className="line"></hr>
      <p>@2022 Copyrights</p>
    </Container>
  );
}

export default Footer;
