import React from 'react'
import { Button,Card } from 'react-bootstrap'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import tech from '../Login/tech.jpeg'
import './DeleteBlog.css'
function DeleteBlog() {
  function handleDelete(){
    NotificationManager.danger('Successfully', 'Delete');
  }
  return (
    <div className="container">
      <div className="row row1">
        <div className="col-md-6 col-lg-6 col-sm-12">
          <Card
            className="card"
            style={{ width: '25rem', height: 'max-content' }}
          >
            <Card.Img variant="top" src={tech} />
            <Card.Body>
              <Card.Title>Solana</Card.Title>
              <p>
                Hello solana is the future of blockchain and you will see it
                soon
              </p>
              <br></br>
              <Button className="btn btn-danger" onClick={handleDelete} style={{ padding: '12px' }}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          <Card
            className="card"
            style={{ width: '25rem', height: 'max-content' }}
          >
            <Card.Img variant="top" src={tech} />
            <Card.Body>
              <Card.Title>Casper Labs</Card.Title>
              <p>
                First Blockchain that introduce proof of stake to reduce proof
                of work
              </p>
              <br></br>
              <Button className="btn btn-danger" style={{ padding: '12px' }}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row row2 row1">
        <div className="col-md-6 col-lg-6 col-sm-12">
          <Card
            className="card"
            style={{ width: '25rem', height: 'max-content' }}
          >
            <Card.Img variant="top" src={tech} />
            <Card.Body>
              <Card.Title>Ehtereum</Card.Title>
              <p>First Blockchain that introduce Smart Contracts term</p>
              <br></br>
              <Button className="btn btn-danger" style={{ padding: '12px' }}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          <Card
            className="card"
            style={{ width: '25rem', height: 'max-content' }}
          >
            <Card.Img variant="top" src={tech} />
            <Card.Body>
              <Card.Title>Bitcoin</Card.Title>
              <p>
                It is developed for the financial purpose to reduce the monoply
                of bank
              </p>
              <br></br>
              <Button className="btn btn-danger" style={{ padding: '12px' }}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <NotificationContainer/>
    </div>
  )
}

export default DeleteBlog
