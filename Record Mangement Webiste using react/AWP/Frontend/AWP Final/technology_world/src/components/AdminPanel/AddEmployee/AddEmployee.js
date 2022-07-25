import React from 'react';
import {Form,Card} from 'react-bootstrap'
import logo from '../Login/logo.png';
import './AddEmployee.css'
function AddEmployee() {
  return (
        <div className='container employee'>
             <Card className="card" style={{ width: '30rem',height:'auto' }}>
                  <Card.Img variant="top" className="logo" src={logo} />
                  <Card.Body>
                    <Form>
                    <Form.Group size="lg" controlId="text">
                        <Form.Label>
                          <h5>Employee Name</h5>
                        </Form.Label>

                        <Form.Control
                          autoFocus
                          type="text"
                          
                          placeholder="Enter Name"
                          
                        />
                      </Form.Group>
                      <br></br>
                      <Form.Group size="lg" controlId="text">
                        <Form.Label>
                          <h5>Field</h5>
                        </Form.Label>

                        <Form.Control
                          autoFocus
                          type="text"
                          
                          placeholder="Enter field in which you written blogs"
                          
                        />
                      </Form.Group>
                      <br></br>
                      <Form.Group size="lg" controlId="email">
                        <Form.Label>
                          <h5>Email</h5>
                        </Form.Label>

                        <Form.Control
                          autoFocus
                          type="email"
                          
                          placeholder="Enter Email"
                          
                        />
                      </Form.Group>
                      <Form.Group size="lg" controlId="password">
                        <Form.Label>
                          <br></br>
                          <h5>Password</h5>
                        </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter Password"
                          
                        />
                      </Form.Group>
                      <br></br>
                      <Form.Group
                        className="btn btn-success"
                        size="lg"
                        type="submit"
                      >
                        <h5 style={{color:'white'}}>Sign Up</h5>
                      </Form.Group>
                      <br></br>
                      <br></br>
                    </Form>
                  </Card.Body>
                </Card>
        </div>
    );
}

export default AddEmployee;
