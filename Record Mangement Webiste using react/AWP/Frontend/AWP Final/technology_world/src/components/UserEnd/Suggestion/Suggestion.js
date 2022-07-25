import React, {useState} from 'react'
import Footer from '../Footer/Footer'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Button,Card,Form} from 'react-bootstrap'
import './Suggestion.css'
function Suggestion() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [suggestion, setSuggestion] = useState('')
  function handleSubmit(){
    NotificationManager.success('We will focus on your suggestion', 'Success');
  }
  return (
      <>
    
    <div className="container suggestion1">
        <div className='row '>
          <div className='col-md-2 col-lg-4'></div>
          <div className='col-sm-12 col-md-10 col-lg-8'>
        <Card
          className="card"
          style={{ width: '30rem', height: 'max-content' }}
        >
          <Card.Header>
            <h3>Suggestion</h3>
            <p>suggestion form</p>
          </Card.Header>
          <Card.Body>
            <Form>
            <Form.Group size="lg" controlId="email">
                <Form.Label>
                  <h5>Name</h5>
                </Form.Label>

                <Form.Control
                  autoFocus
                  type="text"
                  value={name}
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
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
                  <h5>Suggest Topic</h5>
                </Form.Label>
                <br></br>
                <textarea
                  style={{ width: '100%' }}
                  className="form-control"
                  type="textarea"
                  value={suggestion}
                  placeholder="Enter Message"
                  onChange={(e) => setSuggestion(e.target.value)}
                />
              </Form.Group>
              <br></br>
              <Button classname='btn btn-primary' onClick={handleSubmit} size='lg'>Submit</Button>
            </Form>
            <br></br>
            <Card.Footer>Technology World</Card.Footer>
          </Card.Body>
        </Card>
        </div>
        <NotificationContainer/>
        </div>
      </div>
    <div className='footer'>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Suggestion