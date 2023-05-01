import React, { useState } from "react";
import TopNav from "../../components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { districts } from "../../supportiveFiles/SelectList";
import { Container, Row, Col } from "react-bootstrap";

import SenderService from "../../service/SenderService";

function UserSign(props) {
  const navigate = useNavigate();

  function customerClick() {
    if (validated === true) {
      SenderService.createCustomer(details).then((res) => {
        console.log(details);

        navigate("/driverProfile", { state: { data: details } });
      });
    }
  }

  const [validated, setValidated] = useState(false);

  const location = useLocation();
  //console.log(location);
  const coordinate = location.state?.data;
  const displayString = location.state?.success;

  const [details, setDetails] = useState({
    customerPhone: "",
    customerUserName: "",
    email: "",
    password: "",
    latitude: "",
    longitude: "",
    address: "",
    district: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (coordinate != null) {
      details.longitude = coordinate.lng;
      details.latitude = coordinate.lat;
    }

    //console.log(postalCode);

    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      //e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    console.log(details);
    console.log(validated);
  };

  return (
    <>
      <div>
        <TopNav></TopNav>
      </div>
      <Container>
        <div className="wrapper  d-flex align-items-center justify-content-center w-100">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h2 className="mb-3">Sign in here </h2>
            <Row>
              <Col>
                <InputGroup className="mb-4">
                  <Form.Control placeholder={displayString} disabled />
                  <Link to="/userMap" state={{ data: 1 }} className="Link">
                    <Button variant="outline-secondary" id="button-addon2">
                      Enter your location
                    </Button>
                  </Link>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicTell">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    name="customerPhone"
                    required
                    onChange={handleChange}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your phone number with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasic">
                  <Form.Label>User name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter User name"
                    name="customerUserName"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Vehicle Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Vehicle number"
                    name="vehicleNo"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Address"
                    name="address"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDidtrict">
                  <Form.Label>District</Form.Label>
                  <Form.Select
                    aria-label="Floating label select example"
                    name="district"
                    onChange={handleChange}
                  >
                    {districts.map((dis) => (
                      <option value={dis.value}>{dis.label}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPostal">
                  <Form.Label>Postal Codes you can work</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Postal code"
                    name="postalCode"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Show password" />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={customerClick}>
                  Sign as Customer
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default UserSign;
