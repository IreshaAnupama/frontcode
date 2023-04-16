import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "bootstrap/dist/css/bootstrap.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./TopNav.css";

import logo from "../img/logo.png";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const TopNav = () => {
  const popoverSign = (
    <Popover id="popover-basic"  style={{Width:'200px'}}>
      <Popover.Header as="h3" >
        <Row>
          <Col>
          <Nav.Link href="/driverSign">
            <Button> Driver</Button>
          </Nav.Link>
          </Col>
          <Col>
          <Nav.Link href="/userSign">
            <Button> Customer</Button>
          </Nav.Link>
          </Col>
        </Row>
      </Popover.Header>
    </Popover>
  );

    const popoverlog = (
      <Popover id="popover-basic"  style={{Width:'200px'}}>
        <Popover.Header as="h3" >
          <Row>
            <Col>
            <Nav.Link href="/login">
              <Button> As a Driver</Button>
            </Nav.Link>
            </Col>
            <Col>
            <Nav.Link href="/login">
              <Button> As a Customer</Button>
            </Nav.Link>
            </Col>
          </Row>
        </Popover.Header>
      </Popover>
    );
  
  

  return (
    <>
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
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <NavDropdown title="services" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/UserMap">
                    Maplocation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/imageexample">
                    Image Example
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Eamplemap">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popoverSign}
                  
                >
                  <Nav.Link>Signin</Nav.Link>
                </OverlayTrigger>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default TopNav;
