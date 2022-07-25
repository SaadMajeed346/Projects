import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
import {
  BsEnvelopeFill,
  BsFacebook,
  BsFillTelephoneFill,
  BsHouseFill,
  BsLinkedin,
  BsSkype,
  BsTwitter,
} from 'react-icons/bs'
function Footer() {
  return (
    <Container fluid className="mt-5 p-2 fixed-bottom footer text-white">
      <Row>
        <Col lg={12} sm={12} md={12 }>
            All Copyrights Reserved by Sinux @2022 Copyrights
               <hr className="line"></hr>
          </Col>
      </Row>
    </Container>
  )
}

export default Footer
