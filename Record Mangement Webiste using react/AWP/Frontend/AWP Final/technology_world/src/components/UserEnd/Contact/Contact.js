import React, { useState } from 'react'
import './Contact.css'
import 'react-notifications/lib/notifications.css';
import Footer from '../Footer/Footer'
import { Button, Card, Form } from 'react-bootstrap'
import {NotificationContainer, NotificationManager} from 'react-notifications';
function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  function handleSubmit(){
    NotificationManager.success('Your Query Succefully Noted', 'Contact');
  }
  return (
    <>
      <div className="container text-center">
        <h1 style={{marginTop:'3vh'}}>Contact Form</h1>
        <div className='row '>
          <div className='col-md-2 col-lg-4'></div>
          <div className='col-sm-12 col-md-10 col-lg-8'>
        <Card
          className="card contact"
          style={{ width: '30rem', height: 'max-content' }}
        >
          <Card.Header>
            <h3>Contact Us</h3>
            <p>fill this form for contact</p>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group size="lg" controlId="email">
                <Form.Label>
                  <h5>Email</h5>
                </Form.Label>

                <Form.Control
                  autoFocus
                  type="email"
                  value={email}
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group size="lg" controlId="message">
                <Form.Label>
                  <br></br>
                  <h5>Message</h5>
                </Form.Label>
                <br></br>
                <textarea
                  style={{ width: '100%' }}
                  className="form-control"
                  type="textarea"
                  value={message}
                  placeholder="Enter Message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <br></br>
              <Button classname='btn btn-primary' onClick={handleSubmit} size='lg'>Send</Button>
            </Form>
            <br></br>
          </Card.Body>
        </Card>
        </div>
        </div>
        <NotificationContainer/>
      </div>
      <div className="footer contact-bottom">
        <Footer></Footer>
      </div>
    </>
  )
}

export default Contact
