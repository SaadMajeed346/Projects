import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsPersonCircle } from "react-icons/bs";
import CreditScore from "./CreditScore/CreditScore";
import Credentials from "./Credentials/Credentials";
import Status from "./Status/Status";
import Footer from "./Footer/Footer";

function Dashboard(props) {
  return (
    <>
      <h1 className="text-center mt-5">
        Welcome Onboard <span className="blue"> {props.obj.name} </span>!
      </h1>

      <Container fluid>
        <Row>
          <Col className="mt-5" lg={3}>
            <Status obj={props.obj} />
          </Col>

          <Col className="mt-5" lg={6}>
            <Card>
              <CreditScore obj={props.obj} />
              <Card.Header className="text-center display-6 pb-2 fw-lighter">
                Credit Score
              </Card.Header>
            </Card>
          </Col>

          <Col className="mt-5" lg={3}>
            <Card>
              <Card.Body>
                <Card.Title className="pb-4">
                  Profile <BsPersonCircle className="float-end" />
                </Card.Title>
                <Credentials obj={props.obj} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Dashboard;
