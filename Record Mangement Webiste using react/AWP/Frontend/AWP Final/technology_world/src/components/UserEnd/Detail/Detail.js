import React from 'react'
import './Detail.css'
import mobile from '../../../assests/mobile.jpg'
import { Button, Card } from 'react-bootstrap'
import Footer from '../Footer/Footer'
function Detail() {
  return (
    <>
    <div className='container detail'>
        <div className='row'>
            <div className='col-md-2 col-sm-6 col-lg-6'></div>
            <div className='col-md-10 col-sm-12 col-lg-6'>
            <Card
              className="card detailcard"
              style={{ width: '50rem', height: 'max-content' }}
            >
              <Card.Img variant="top" src={mobile} />
              <Card.Title style={{backgroundColor:'#ccccff',padding:'5px',color:'white'}}>AR HeadSet</Card.Title>
              <Card.Body>
                <p>
                MWC 2022 is just a few weeks away and Honor is one of the brands that will hold an in-person event where we’ll see the debut of its new Magic series flagship device. Honor CEO George Zhao took to Facebook to deliver a new teaser for the upcoming device which yet again confirms it will be powered by the flagship Snapdragon 8 Gen 1 chipset. The accompanying message describes the device as "beyond standard" but we don’t get any additional details.
                </p>
                <p>
                The Honor Magic 4 (tentative name) also appeared in an early Geekbench listing comparison against the just-launched Samsung Galaxy S22 Ultra. Tipster @RODENT950 compared the scores of the Honor flagship against the brand new Galaxy. The Honor phone comes out victorious with a 1,245-point single-core outing compared to the S22 Ultra’s 1,215 points.
                </p>
                <p>
                Honor's device also won the multi-core department with its 3,901-point result over the Galaxy’s 3,303-points. The source confirmed that both devices are powered by the same Snapdragon 8 Gen 1 chip so it will be interesting to see what refinements Honor did to its device.
                </p>
              </Card.Body>
              <Card.Footer >AR</Card.Footer>
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

export default Detail