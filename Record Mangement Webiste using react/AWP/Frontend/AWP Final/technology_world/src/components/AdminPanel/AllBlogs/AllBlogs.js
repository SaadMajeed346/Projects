import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import ProfileUi from 'react-profile-card'
import tech from '../Login/tech.jpeg'
import {
  BsClipboardData,
  BsPersonCircle,
  BsArrowUpSquareFill,
  BsFillBugFill,
  BsArrowDownSquareFill,
} from 'react-icons/bs'
import '../../../../node_modules/react-vis/dist/style.css'
import { Chart } from 'react-google-charts'
import { FcReading} from "react-icons/fc";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from 'react-vis'
import './AllBlogs.css'
const pieData = [
  ['Task', 'Hours per Day'],
  ['Work Done', 70],
  ['Bugs Reported', 8],
  ['Remaining Work', 30],
  ['Remaining Work of this week', 4]
]
const pieOptions = {
  title: 'My Daily Activities',
  pieHole: 0.4,
}
const data = [
  { x: 1, y: 20 },
  { x: 2, y: 30 },
  { x: 3, y: 10 },
  { x: 4, y: 50 },
  { x: 5, y: 80 },
  { x: 6, y: 20 },
  { x: 7, y: 90 },
  { x: 8, y: 100 },
  { x: 9, y: 20 },
  { x: 10, y: 10 },
  { x: 11, y: 200 },
  { x: 12, y: 1000 },
]
function AllBlogs() {
  return (
    <div className="container Carder" style={{ color: 'white' }}>
      <Row>
        <Col className="" lg={4} md={4} sm={12}>
          <Card
            style={{ height: 'auto', background: '#828E95', color: 'white' }}
          >
            <Card.Body>
              <Card.Title className="pb-4">
                Viewers
                <BsClipboardData className="float-end" />
              </Card.Title>
              <Card.Text>
                1200 Views
                <label style={{ float: 'right', color: 'green' }}>
                  10% <BsArrowUpSquareFill className="float-end" />
                </label>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="" lg={4} md={4} sm={12}>
          <Card
            style={{ height: 'auto', background: '#F5BD66', color: 'white' }}
          >
            <Card.Body>
              <Card.Title className="pb-4">
                Blogs Uploaded
                <FcReading className="float-end" />
              </Card.Title>
              <Card.Text>
                6 Blogs
                <label style={{ float: 'right', color: 'red' }}>
                  20% <BsArrowDownSquareFill className="float-end" />
                </label>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="" lg={4} md={4} sm={12}>
          <Card
            style={{ height: 'auto', background: '#F14444', color: 'white' }}
          >
            <Card.Body>
              <Card.Title className="pb-4">
                Bugs Reported
                <BsFillBugFill className="float-end" />
              </Card.Title>
              <Card.Text>
                10 Bugs
                <label style={{ float: 'right', color: 'green' }}>
                  11.8% <BsArrowUpSquareFill className="float-end" />
                </label>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          className=""
          style={{ color: 'black', marginTop: '7vh' }}
          lg={6}
          md={12}
          sm={12}
        >
           <Card
            style={{
              height: 'auto',
      
      
              color: 'white',
            }}
          >
            <Card.Body >
          <XYPlot height={300} width={590}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={data} />
          </XYPlot>
          </Card.Body>
          </Card>
        </Col>
        <Col className="" lg={6} md={12} sm={12}>
          <Card
            style={{
              height: 'auto',
              marginTop: '3vh',
              color: 'white',
              marginTop: '10vh'
            }}
          >
            <Card.Body >
              <Chart 
                width={'600px'}
                height={'320px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={pieData}
                options={pieOptions}
                rootProps={{ 'data-testid': '3' }}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default AllBlogs
