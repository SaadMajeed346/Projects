import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import './Home.css'
import tech from '../../AdminPanel/Login/tech.jpeg'
import { Button, Card } from 'react-bootstrap'
import casper from '../../../assests/casper.png'
import mobile from '../../../assests/mobile.jpg'
import Detail from '../Detail/Detail'
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'
function Home() {
  const [show, setShow] = useState(false)
  function handleSubmit() {
    setShow(true)
    console.log('hello')
  }
  useEffect(() => {
    setShow(false)
  }, [])
  return (
    <>
      <div className="container Home">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-4">
            <Card
              onClick={handleSubmit}
              className="card"
              style={{ width: '20rem', height: 'max-content' }}
            >
              <Card.Img variant="top" src={tech} style={{ height: '25vh' }} />
              <Card.Title
                style={{
                  backgroundColor: '#e5c869',
                  padding: '5px',
                  color: 'white',
                }}
              >
                Automatic Attendence System
              </Card.Title>
              <Card.Body>
                <p>
                  An automated attendance system that consists of a web system
                  for entire organization to record attendance.
                </p>
                <Button
                  className="btn btn-success"
                  onClick={handleSubmit}
                  style={{ width: '100%' }}
                >
                  Read More
                </Button>
              </Card.Body>
              <Card.Footer>Artifical Intelligence</Card.Footer>
            </Card>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Card
              className="card"
              style={{ width: '20rem', height: 'max-content' }}
            >
              <Card.Img variant="top" src={tech} style={{ height: '25vh' }} />
              <Card.Title
                style={{
                  backgroundColor: '#93a67f',
                  padding: '5px',
                  color: 'white',
                }}
              >
                Edge Computing
              </Card.Title>
              <Card.Body>
                <p>
                  Edge computing is a distributed information technology (IT)
                  architecture in which client data...
                </p>
                <Button
                  className="btn btn-success"
                  onClick={handleSubmit}
                  style={{ width: '100%' }}
                >
                  Read More
                </Button>
              </Card.Body>
              <Card.Footer>Computer</Card.Footer>
            </Card>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Card
              className="card"
              style={{ width: '20rem', height: 'max-content' }}
            >
              <Card.Img variant="top" src={mobile} style={{ height: '25vh' }} />
              <Card.Title
                style={{
                  backgroundColor: '#309ec7',
                  padding: '5px',
                  color: 'white',
                }}
              >
                Honor Devices
              </Card.Title>
              <Card.Body>
                <p>
                  MWC 2022 is just a few weeks away and Honor is one of the
                  brands that will hold an in-person event..
                </p>
                <Button
                  className="btn btn-success"
                  onClick={handleSubmit}
                  style={{ width: '100%' }}
                >
                  Read More
                </Button>
              </Card.Body>
              <Card.Footer>Mobile World</Card.Footer>
            </Card>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Card
              className="card"
              style={{ width: '20rem', height: 'max-content' }}
            >
              <Card.Img variant="top" src={tech} style={{ height: '25vh' }} />
              <Card.Title
                style={{
                  backgroundColor: '#a2a2a2',
                  padding: '5px',
                  color: 'white',
                }}
              >
                The Sandbox
              </Card.Title>
              <Card.Body>
                <p>
                  Best described as a virtual world based on NFTs, blockchain
                  and cryptocurrency,....
                </p>
                <Button
                  className="btn btn-success"
                  onClick={handleSubmit}
                  style={{ width: '100%' }}
                >
                  Read More
                </Button>
              </Card.Body>
              <Card.Footer>MetaVerse</Card.Footer>
            </Card>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Card
              className="card"
              style={{ width: '20rem', height: 'max-content' }}
            >
              <Card.Img variant="top" src={tech} style={{ height: '25vh' }} />
              <Card.Title
                style={{
                  backgroundColor: '#ccccff',
                  padding: '5px',
                  color: 'white',
                }}
              >
                AR HeadSet
              </Card.Title>
              <Card.Body>
                <p>
                  Apple is reportedly planning to launch its AR/VR headset
                  sometime in late 2022 or 2023 .....
                </p>
                <Button
                  className="btn btn-success"
                  onClick={handleSubmit}
                  style={{ width: '100%' }}
                >
                  Read More
                </Button>
              </Card.Body>
              <Card.Footer>AR</Card.Footer>
            </Card>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <Card
              className="card"
              style={{ width: '20rem', height: 'max-content' }}
            >
              <Card.Img variant="top" src={casper} style={{ height: '25vh' }} />
              <Card.Title
                style={{
                  backgroundColor: '#cc1f36',
                  padding: '5px',
                  color: 'white',
                }}
              >
                CasperLabs
              </Card.Title>
              <Card.Body>
                <p>
                  CasperLabs lowers the barrier to entry for blockchain adoption
                  by providing professional services....
                </p>
                <Link
                  to="/detail"
                  className="btn btn-success"
                  style={{ width: '100%' }}
                >
                  Read More
                </Link>
              </Card.Body>
              <Card.Footer>Blockcahin</Card.Footer>
            </Card>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </>
  )
}

export default Home
