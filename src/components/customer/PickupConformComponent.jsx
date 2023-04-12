import React from "react";
import SenderService from "../../service/SenderService";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { withRouter } from "../../supportiveFiles/withRouter";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import Modal from "react-bootstrap/Modal";

function PickupConformComponent() {
  const [details, setDetails] = useState({
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  const parcel = location.state.pickup;
  // console.log(location.state.pickup.cost);
  // console.log('location.state.pickup=>' +JSON.stringify());
  console.log(parcel);
  let deleveryCost;

  if (parcel.senderDistrict === parcel.receiverDistrict) {
    deleveryCost = 150;
  } else {
    deleveryCost = 250;
  }

  const newParcel = {
    pickupDate: parcel.pickupDate,
    timeFrom: parcel.timeFrom,
    timeTo: parcel.timeTo,
    postMethod: parcel.postMethod,
    vehicleType: parcel.vehicleType,
    paymentType: parcel.paymentType,
    specialNote: parcel.spetialNote,
    parcelCost: parcel.cost,
    deleveryCost: deleveryCost,

    senderName: parcel.senderName,
    senderEmail: parcel.senderEmail,
    senderPhoneNo: parcel.senderPhoneNo,
    senderAddress: parcel.senderAddress,
    senderPostalCode: parcel.senderPostalCode,
    senderDistrict: parcel.senderDistrict,

    receiverPhoneNo: parcel.receiverPhoneNo,
    receiverName: parcel.receiverName,
    receiverAddress: parcel.receiverAddress,
    receiverDistrict: parcel.receiverDistrict,
    receiverPostalCode: parcel.receiverPostalCode,
  };

  let savePickup = (e) => {
    e.preventDefault();
    handleShow();

    SenderService.addPickup(newParcel).then((res) => {
      console.log("savePickup");
      handleShow();
      //navigate("/pickupConformComponent")
    });
  };

  // SenderService.addPickup(newParcel).then(res =>{
  console.log(newParcel);

  //this.props.navigate("/pickupConformComponent",{state:{parcel}})
  //});

  return (
    <div>
      <Button
        className="btn btn-success"
        onClick={savePickup}
        style={{ backgroundColor: "purple" }}
      >
        {" "}
        Save My Pick up
      </Button>
      <Container>
        <Row>
          {/*SENDER CARD  */}

          <div className="card col-md-4 ">
            <Card.Header bg="dark">
              <h4>Sender Details</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Row>
                  <Col md={4}>
                    <Card.Title>Sender address :</Card.Title>
                  </Col>
                  <Col>
                    {parcel.senderName},<br></br>
                    {parcel.senderAddress},<br></br>
                    {parcel.senderDistrict}.<br></br>
                  </Col>
                </Row>
                <br></br>
                PostalCode : {parcel.senderPostalCode}
                <br></br>
                Email : {parcel.senderEmail}
                <br></br>
                Phone number: {parcel.senderPhoneNo}
                <br></br>
              </Card.Text>
            </Card.Body>

            {/*RECEIVER CARD  */}

            <Card.Header bg="dark">
              <h4>Receiver Details</h4>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Row>
                  <Col md={4}>
                    <Card.Title>Receiver address :</Card.Title>
                  </Col>
                  <Col>
                    {parcel.receiverName},<br></br>
                    {parcel.receiverAddress},<br></br>
                    {parcel.receiverDistrict}.<br></br>
                  </Col>
                </Row>
                <br></br>
                PostalCode : {parcel.receiverPostalCode}
                <br></br>
                Email : {parcel.receiverEmail}
                <br></br>
                Phone number: {parcel.receiverPhoneNo}
                <br></br>
              </Card.Text>
            </Card.Body>
          </div>

          {/*PARCEL DETAILS*/}

          <div className="card col-md-4 ">
            <Card.Header bg="dark">
              <h4>Parcel Details</h4>
            </Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroup.Item>
                  pick up Date : {newParcel.pickupDate}
                </ListGroup.Item>
                <ListGroup.Item>
                  Pick up time : {newParcel.timeFrom} - {newParcel.timeTo}
                </ListGroup.Item>
                <ListGroup.Item>
                  Post Methd : {newParcel.postMethod}
                </ListGroup.Item>
                <ListGroup.Item>
                  Vehicle Type : {newParcel.vehicleType}
                </ListGroup.Item>
                <ListGroup.Item>
                  Payment Method : {newParcel.paymentType}
                </ListGroup.Item>
                <ListGroup.Item>
                  Special Note : {newParcel.specialNote}
                </ListGroup.Item>
                <ListGroup.Item>
                  Parcel Cost : {newParcel.deleveryCost}
                </ListGroup.Item>
                <ListGroup.Item>
                  Delevery Cost : {newParcel.deleveryCost}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </div>
        </Row>
      </Container>

      {/* pop up model*/}
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Your parcel id is{" "}
            <ListGroup.Item> {newParcel.pickupDate}</ListGroup.Item>{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          To track your parcel plz sign in our page <br></br> To create accout
          plz enter new password
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
            <Button variant="primary" onClick={handleClose}>
              Sign in
            </Button>
          </Form.Group>
          If you have account already pls Log in to your account <br></br>
          <Button variant="primary" onClick={handleClose}>
            Log in
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PickupConformComponent;
