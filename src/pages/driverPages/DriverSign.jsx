import React, { useState } from "react";
import TopNav from "../../components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { districts } from "../../supportiveFiles/SelectList";
import DriverService from "../../service/DriverService";
import Feedback from "react-bootstrap/esm/Feedback";
import { Container, Row, Col } from "react-bootstrap";

function DriverSign(props) {
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const click = false;

  function driverClick() {
    if (validated === true) {
      console.log("courier created");
      DriverService.createDriver(details).then((res) => {
        //console.log("courier created");
        navigate("/driverProfile", { state: { data: details } });
      });
    } else {
      console.log("lllll");
    }
  }

  const location = useLocation();
  //console.log(location);
  const coordinate = location.state?.data;
  const displayString = location.state?.success;

  /*const [postalCode, setPostalCode] = useState({
    postalCode1: "",
    postaiCode2: "",
    postaiCode3: "",
  }); */

  const [details, setDetails] = useState({
    courierPhone: "",
    email: "",
    latitude: "",
    longitude: "",
    password: "",
    courierUserName: "",
    vehicleNo: "",
    address: "",
    district: "",
    postalCode1: "",
    postalCode2: "",
    postalCode3: "",
  });
  /*const postalChange = (e) => {
    const { name, value } = e.target;
    setPostalCode((prev) => {
      return { ...prev, [name]: value };
    });
  };*/

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (coordinate != null) {
      details.longitude = coordinate.lat;
      details.latitude = coordinate.lng;
    }

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
                <div>
                  <InputGroup className="mb-4">
                    <Form.Control placeholder={displayString} disabled />
                    <Link to="/userMap" state={{ data: 2 }} className="Link">
                      <Button variant="outline-secondary" id="button-addon2">
                        Enter your location
                      </Button>
                    </Link>
                  </InputGroup>
                </div>
                <Form.Group className="mb-3" controlId="formBasicTell">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter your phone number"
                    name="courierPhone"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Phone number.
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    We'll never share your phone number with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasic">
                  <Form.Label>User name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter User name"
                    name="courierUserName"
                    onChange={handleChange}
                  />
                  <Feedback type="invalid">
                    {" "}
                    Please provide a user name.
                  </Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid valid email.
                  </Form.Control.Feedback>
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
                <Form.Control.Feedback type="invalid">
                  Please provide a valid valid Vehicle no
                </Form.Control.Feedback>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter Address"
                    name="address"
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid address.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDidtrict">
                  <Form.Label>District</Form.Label>
                  <Form.Select
                    required
                    aria-label="Floating label select example"
                    name="district"
                    onChange={handleChange}
                  >
                    <Form.Control.Feedback type="invalid">
                      Please select a district
                    </Form.Control.Feedback>
                    {districts.map((dis) => (
                      <option value={dis.value}>{dis.label}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Postal Codes you can work</Form.Label>
                  <Form.Control
                    id="p1"
                    required
                    type="text"
                    placeholder="Enter first Postal code"
                    name="postalCode1"
                    onChange={handleChange}
                  />
                  <Feedback type="invalid">
                    Please provide a valid Postal code.
                  </Feedback>
                  <Form.Control
                    id="p2"
                    required
                    type="text"
                    placeholder="Enter second Postal code"
                    name="postalCode2"
                    onChange={handleChange}
                  />
                  <Feedback type="invalid">
                    Please provide a valid Postal code.
                  </Feedback>
                  <Form.Control
                    id="p3"
                    required
                    type="text"
                    placeholder="Enter third Postal code"
                    name="postalCode3"
                    onChange={handleChange}
                  />
                  <Feedback type="invalid">
                    Please provide a valid Postal code.
                  </Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                  <Feedback type="invalid">Please provide a password.</Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="I agrree to term and conditions"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={driverClick}>
                  Sign as Driver
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default DriverSign;
