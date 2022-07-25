import React from 'react'
import {Card } from 'react-bootstrap'
import './AddBlog.css'
function AddBlog() {
  return (
    <div className="container mainClass1 row">
      <div className="col-sm-12 col-md-12 col-lg-12">
        <Card
          className="card "
          style={{ width: 'fit-content', height: 'max-content' }}
        >
          <Card.Title style={{ padding: '25px' }}>
            <h1>Add Blog </h1>
          </Card.Title>
          <Card.Body>
            <form>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Your Name"
              />
              <br></br>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Your Email For Verification Process"
              />
              <br></br>
              <input
                type="text"
                class="form-control"
                placeholder="Enter The Title Of Blog"
              />
              <br></br>
              <input
                type="text"
                class="form-control"
                placeholder="Relted To Which Field"
              />
              <br></br>
              <textarea
                class="form-control"
                placeholder="Enter Description"
                aria-label="With textarea"
              ></textarea>
              <br></br>
              <input
                class="form-control form-control-lg"
                id="formFileLg"
                type="file"
              />
              <br />
              <button className="form-control btn btn-success">
                Submit Blog
              </button>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default AddBlog
