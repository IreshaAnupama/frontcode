import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.css'
import NavDropdown from 'react-bootstrap/NavDropdown';


import logo from '../img/logo.png';

export const NavbarUser = () => {
  return (
    <><div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container id='navlist'>
        <Navbar.Brand ><img src={logo} height={50} width={50} alt="Logo"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="/home">Home</Nav.Link>
            
            <Nav.Link href="/contact">Contact</Nav.Link>
            <NavDropdown title="services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/UserMap">Maplocation</NavDropdown.Item>
              <NavDropdown.Item href="/imageexample">
                Image Example
              </NavDropdown.Item>
              <NavDropdown.Item href="/Eamplemap">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/parcelList">Login</Nav.Link>
            
            <Nav.Link href="/userProfile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </div>
            
  </>
  )
}
