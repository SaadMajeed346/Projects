import React from "react";
import "./Packages.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function Packages(props) {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card id="gold" className="mt-4 text-center">
            <Card.Body>
              <Card.Title className="text-warning display-6 fw-bold">
                Gold
              </Card.Title>
              <p>
                <i>30 Documents</i>
              </p>
              <p className="h3">
                <b>0.1 Ethers</b>
              </p>
              <Card.Text>
                Built for regular credit experience updation so subscribption
                need to be done only once. Added benefit of a comparatively
                discounted price and saving gas fees of subscribing again and
                again.
              </Card.Text>
              <Button
                variant="warning"
                disabled={!props.isShowBuy}
                onClick={() => {
                  props.send("0x16345785D8A0000");
                }}
              >
                Buy
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card id="platinum" className="mt-4 text-center">
            <Card.Body>
              <Card.Title className="text-primary display-6 fw-bold">
                Platinum
              </Card.Title>
              <p>
                <i>20 Documents</i>
              </p>
              <p className="h3">
                <b>0.08 Ethers</b>
              </p>
              <Card.Text>
                Built for normal usage so both cost and subscription gas
                efficiency can be achieved at once. Healthy number of documents
                are provided in this package for uploading good number of
                documents
              </Card.Text>
              <Button
                variant="primary"
                disabled={!props.isShowBuy}
                onClick={() => {
                  props.send("0x11C37937E080000");
                }}
              >
                Buy
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card id="silver" className="mt-4 text-center">
            <Card.Body>
              <Card.Title className="text-secondary display-6 fw-bold">
                Silver
              </Card.Title>
              <p>
                <i>10 Documents</i>
              </p>
              <p className="h3">
                <b>0.05 Ethers</b>
              </p>
              <Card.Text>
                Built for most economical and personal usage. Quick and
                in-expensive package to upload documents in a go. Best
                economical package at start for doing interactions with factiiv
                network.
              </Card.Text>
              <Button
                variant="secondary"
                disabled={!props.isShowBuy}
                onClick={() => {
                  props.send("0xB1A2BC2EC50000");
                }}
              >
                Buy
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Packages;
