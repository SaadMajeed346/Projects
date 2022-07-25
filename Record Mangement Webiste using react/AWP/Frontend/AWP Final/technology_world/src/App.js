import './App.css'
import Dashboard from './components/AdminPanel/Dashboard/Dashboard'
import Login from './components/AdminPanel/Login/Login'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Admin from './components/AdminPanel/admin'
import { Route, Routes, Link } from 'react-router-dom'
import logo from './components/AdminPanel/Login/logo.png'
import React, { useEffect, useState } from 'react'
import About from './components/UserEnd/About/About'
import Home from './components/UserEnd/Home/Home'
import Contact from './components/UserEnd/Contact/Contact'
import Suggestion from './components/UserEnd/Suggestion/Suggestion'
import Detail from './components/UserEnd/Detail/Detail'
function App() {
  const [nav, setNav] = useState(true)
  function handleDashBoard() {
    setNav(false)
  }
  return (
    <div className="App">
      {nav && (
        <Navbar bg="light" expand="lg" style={{ width: '100%' }}>
          <Container>
            <Navbar.Brand to="/">
              <img
                className="brand-logo"
                src={logo}
                alt="LOGO"
                style={{ wdith: '40x', height: '60px' }}
              />
              <label className="blue brand-text">
                <h3>Technology World</h3>
              </label>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="right">
                <Nav.Link>
                  <Link className="link" to="/">
                    Home
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="link" to="/contact">
                    <label>Contact us</label>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="link" to="/suggest">
                    Suggestions
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="link" to="/about">
                    About
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="link" to="/login">
                    Login
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
      <Routes>
        <Route path="/packages" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/suggest" element={<Suggestion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home></Home>} />
        <Route path="/detail" element={<Detail/>} />
      </Routes>
    </div>
  )
}

export default App
