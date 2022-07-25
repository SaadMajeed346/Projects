import React, { useState, useEffect } from 'react'
import { Form, Card } from 'react-bootstrap'
import Dashboard from '../Dashboard/Dashboard'
import logo from './logo.png'
import { Route, Routes } from 'react-router-dom'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './Login.css'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, setlogin] = useState(false)
  useEffect(() => {
    setlogin(JSON.parse(window.localStorage.getItem('login')))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('login', login)
  }, [login])
  function handleSubmit(event) {
    NotificationManager.success('Successfully', 'Login');
    event.preventDefault()
    
    setlogin(true)
  }
  return (
    <div className="mainClass container-fluid">
      {!login && (
        <div className=" row">
          <div className="appAside col-sm-12 col-md-6 col-lg-6"></div>
          <div className="appForm col-sm-12 col-md-6 col-lg-6">
            <div className="background">
              <div className="Login">
                <Card className="card logincard" style={{ width: '30rem',marginTop:'30vh'}}>
                  <Card.Img variant="top" className="logo" src={logo} />
                  <Card.Body>
                    <Form onSubmit={handleSubmit}>
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
                      <Form.Group size="lg" controlId="password">
                        <Form.Label>
                          <br></br>
                          <h5>Password</h5>
                        </Form.Label>
                        <Form.Control
                          type="password"
                          value={password}
                          placeholder="Enter Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <br></br>
                      <Form.Group
                        className="btn-primary"
                        onClick={handleSubmit}
                        size="lg"
                        type="submit"
                      >
                        Login
                      </Form.Group>
                      <br></br>
                      <br></br>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <NotificationContainer/>
        </div>
      )}
      {login && (
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
          <NotificationContainer/>
        </div>
      )}
    </div>
  )
}
export default Login
