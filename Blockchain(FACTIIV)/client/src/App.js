import "./App.css";
import logo from "./assets/Factiiv.png";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { addUserMutation } from "./queries/queries";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import {} from "https://unpkg.com/uport-connect/dist/uport-connect.js";
import MetaMask from "./components/MetaMask/MetaMask";
import Dashboard from "./components/Dashboard/Dashboard";
import Upload from "./components/Upload/Upload";
import Documents from "./components/Documents/Documents";
import Invite from "./components/Invite/Invite";
import About from "./components/About/About";

const Connect = window.uportconnect;
const uport = new Connect("Factiiv");

uport.requestDisclosure({
  requested: ["name", "email", "country", "phone"],
});

var obj,
  count = 0;

function App() {
  // Hiding the QR scanner
  var visibility = document.querySelector(":root");
  // loads the intro animation
  var loader = document.querySelector("body");
  // Timer for loader
  setTimeout(() => {
    visibility.style.setProperty("--view", "block");
    loader.style.setProperty("background-color", "rgb(40, 44, 52)");
    loader.style.setProperty("background-image", "none");
  }, 6000);

  // Add data
  const [addUserMut, { loading, error }] = useMutation(addUserMutation);
  // Checking query
  const [isPending, setPending] = useState(true);

  // To handle the credentials after QR is scanned
  uport.onResponse("disclosureReq").then((res) => {
    obj = JSON.parse(JSON.stringify(res.payload));
    let Rdid = "";
    if (!(window.location.href.split("/")[3] === "")) {
      Rdid = window.location.href.split("/")[3];
    }
    if (count === 0) {
      // QR code
      addUserMut({
        variables: {
          did: obj.did,
          Rdid: Rdid,
        },
      });
      count++;
    }
    setPending(false);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;
  });

  return (
    <div id="container">
      {!isPending && Object.keys(obj).length !== 0 && (
        <Router>
          <Navbar bg="white" expand="lg">
            <Container>
              <Navbar.Brand to="/">
                <img className="brand-logo" src={logo} alt="LOGO" />
                <label className="blue brand-text">
                  <b>Factiiv Network</b>
                </label>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="right">
                  <Nav.Link>
                    <Link className="link" to="/">
                      Dashboard
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="link" to="/packages">
                      Packages
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="link" to="/upload">
                      Upload
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="link" to="/documents">
                      Documents
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="link" to="/invite">
                      Invite
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link className="link" to="/about">
                      About
                    </Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Switch>
            <Route path="/packages">
              <MetaMask obj={obj} />
            </Route>
            <Route path="/upload">
              <Upload obj={obj} />
            </Route>
            <Route path="/documents">
              <Documents obj={obj} />
            </Route>
            <Route path="/invite">
              <Invite obj={obj} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Dashboard obj={obj} />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
