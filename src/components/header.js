import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <Navbar className="fixed-top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>My React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/"} className="link-text">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/about"} className="link-text">
                About
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/products"} className="link-text">
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/tools"} className="link-text">
                Tools
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
