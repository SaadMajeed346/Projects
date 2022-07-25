import React from 'react'
import './About.css'
import { Button,Card } from 'react-bootstrap'
import tech from '../../AdminPanel/Login/tech.jpeg'
import Footer from '../Footer/Footer'
function About() {
  return (
      <>
    <div className="container">
      <div className="row About">
          <div className='col-lg-3'></div>
        <div className="col-md-12 col-lg-9">
          <Card
            className="card"
            style={{ width: '30rem', height: 'max-content' }}
          >
              <Card.Header><h3>About</h3></Card.Header>
            <Card.Img variant="top" src={tech} />
            
            <Card.Body>
              <p>
                The Main Purpose of this website is to provide knowledge to its user about latest technologies that available in market.
              </p>
              <p>This website is developed by Muhammad Saad Majeed</p>
              <br></br>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    <div className='bottom'>
    <Footer></Footer>
    </div>
    
    </>
  )
}

export default About
