import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.css";
import "../TopNav.css";

import logo from "D:/management/frontcode/src/img/logo.png";

const CustomerNavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container id="navlist">
          <Navbar.Brand>
            <img src={logo} height={50} width={50} alt="Logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="/driverParcelList">Parcel List</Nav.Link>
              <Nav.Link href="/orderofshedule">Shedule</Nav.Link>
              <Nav.Link href="/driverProfile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomerNavBar;