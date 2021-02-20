import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Home from "./components/Home.js";
import CreateStudent from "./components/create-student.component.js";
import EditStudent from "./components/edit-student.component.js";
import StudentList from "./components/student-list.component.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Navbar bg="dark" variant="dark">

            <Container>

              <Navbar.Brand>
                <Link to={"/home"} className="nav-link">
                  React MERN Stack App
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">

                <Nav>
                  <Link to={"/create-student"} className="nav-link">
                    Create Student
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/edit-student/:id"} className="nav-link">
                    Edit Student
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/student-list"} className="nav-link">
                    Student List
                  </Link>
                </Nav>

              </Nav>
            </Container>

          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/home" component={Home} />
                  <Route path="/create-student" component={CreateStudent} />
                  <Route path="/edit-student/:id" component={EditStudent} />
                  <Route path="/student-list" component={StudentList} />                  
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>

      </BrowserRouter>
    </div>
  );
}

export default App;
