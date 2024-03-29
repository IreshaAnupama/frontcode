import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import {
  vehicleTypes,
  districts,
  paymentTypes,
  postMethods,
  cities,
} from "../../supportiveFiles/SelectList";
import SenderService from "../../service/SenderService";
import { Link } from "react-router-dom";
import { withRouter } from "../../supportiveFiles/withRouter";

class PickUpFormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      senderPhoneNo: "",
      senderName: "",
      senderEmail: "",
      senderAddress: "",
      senderPostalCode: "",
      senderDistrict: "",

      receiverPhoneNo: "",
      receiverName: "",
      receiverAddress: "",
      receiverDistrict: "",
      receiverPostalCode: "",

      //"12:12 AM" 'Date("11/24/2021")'
      timeFrom: "",
      timeTo: "",
      pickupDate: "",
      vehicleType: "",
      postMethod: "",
      paymentType: "",
      spetialNote: "",
      cost: 0,
      weight:"",
      width:"",
      height:"",
      length:"",
    };
    this.changeSenderPhoneHandler = this.changeSenderPhoneHandler.bind(this);
    this.changeSenderNameHandler = this.changeSenderNameHandler.bind(this);
    this.changeSenderAddressHandler =
      this.changeSenderAddressHandler.bind(this);
    this.changeSenderPostalCodeHandler =
      this.changeSenderPostalCodeHandler.bind(this);
    this.changeSenderEmailHandler = this.changeSenderEmailHandler.bind(this);
    this.changeSenderDistrictHandler =
      this.changeSenderDistrictHandler.bind(this);

    this.changeReceiverPhoneHandler =
      this.changeReceiverPhoneHandler.bind(this);
    this.changeReceiverNameHandler = this.changeReceiverNameHandler.bind(this);
    this.changeReceiverAddressHandler =
      this.changeReceiverAddressHandler.bind(this);
    this.changeReceiverDistrictHandler =
      this.changeReceiverDistrictHandler.bind(this);
    this.changeReceiverPostalCodeHandler =
      this.changeReceiverPostalCodeHandler.bind(this);

    this.changePaymentTypeHandler = this.changePaymentTypeHandler.bind(this);
    this.changePickupDateHandler = this.changePickupDateHandler.bind(this);
    this.changeVehicleTypeHandler = this.changeVehicleTypeHandler.bind(this);
    this.changeSpetialNoteHandler = this.changeSpetialNoteHandler.bind(this);
    this.changeTimeFromHandler = this.changeTimeFromHandler.bind(this);
    this.changeTimeToHandler = this.changeTimeToHandler.bind(this);
    this.changePostMethodeHandler = this.changePostMethodeHandler.bind(this);
    this.changeCostHandler = this.changeCostHandler.bind(this);
    this.changeWeightHandler=this.changeWeightHandler.bind(this);
    this.changelengthHandler=this.changelengthHandler.bind(this);
    this.changeWidthHandler=this.changeWidthHandler.bind(this);
    this.changeHeightHandler=this.changeHeightHandler.bind(this);
  }

  // Sender Handler
  changeSenderPhoneHandler = (event) => {
    this.setState({ senderPhoneNo: event.target.value });
  };

  changeSenderNameHandler = (event) => {
    this.setState({ senderName: event.target.value });
  };
  changeSenderEmailHandler = (event) => {
    this.setState({ senderEmail: event.target.value });
  };

  changeSenderAddressHandler = (event) => {
    this.setState({ senderAddress: event.target.value });
  };

  changeSenderPostalCodeHandler = (event) => {
    this.setState({ senderPostalCode: event.target.value });
  };

  changeSenderDistrictHandler = (event) => {
    this.setState({ senderDistrict: event.target.value });
  };

  // Receiver Handler

  changeReceiverPhoneHandler = (event) => {
    this.setState({ receiverPhoneNo: event.target.value });
  };

  changeReceiverNameHandler = (event) => {
    this.setState({ receiverName: event.target.value });
  };

  changeReceiverAddressHandler = (event) => {
    this.setState({ receiverAddress: event.target.value });
  };

  changeReceiverDistrictHandler = (event) => {
    this.setState({ receiverDistrict: event.target.value });
  };

  changeReceiverPostalCodeHandler = (event) => {
    this.setState({ receiverPostalCode: event.target.value });
  };

  // Pickup Handler

  changeTimeFromHandler = (event) => {
    this.setState({ timeFrom: event.target.value });
  };

  changeTimeToHandler = (event) => {
    this.setState({ timeTo: event.target.value });
  };

  changePickupDateHandler = (event) => {
    this.setState({ pickupDate: event.target.value });
  };

  changeVehicleTypeHandler = (event) => {
    this.setState({ vehicleType: event.target.value });
  };

  changePaymentTypeHandler = (event) => {
    this.setState({ paymentType: event.target.value });
  };

  changeSpetialNoteHandler = (event) => {
    this.setState({ spetialNote: event.target.value });
  };

  changePostMethodeHandler = (event) => {
    this.setState({ postMethod: event.target.value });
  };

  changeCostHandler = (event) => {
    this.setState({ cost: event.target.value });
  };

  changeWeightHandler = (event) => {
    this.setState({ weight: event.target.value });
  };

  changelengthHandler = (event) => {
    this.setState({ length: event.target.value });
  };

  changeWidthHandler = (event) => {
    this.setState({ width: event.target.value });
  };

  changeHeightHandler = (event) => {
    this.setState({ height: event.target.value });
  };

  //save method add pickup
  savePickup = (e) => {
    e.preventDefault();
    let pickup = {
      senderPhoneNo: this.state.senderPhoneNo,
      senderName: this.state.senderName,
      senderEmail: this.state.senderEmail,
      senderAddress: this.state.senderAddress,
      senderPostalCode: this.state.senderPostalCode,
      senderDistrict: this.state.senderDistrict,

      receiverPhoneNo: this.state.receiverPhoneNo,
      receiverName: this.state.receiverName,
      receiverAddress: this.state.receiverAddress,
      receiverDistrict: this.state.receiverDistrict,
      receiverPostalCode: this.state.receiverPostalCode,

      pickupDate: this.state.pickupDate,
      timeFrom: this.state.timeFrom,
      timeTo: this.state.timeTo,
      postMethod: this.state.postMethod,
      vehicleType: this.state.vehicleType,
      paymentType: this.state.paymentType,
      spetialNote: this.state.spetialNote,
      cost: this.state.cost,
      weight:this.state.weight,
      length:this.state.length,
      width:this.state.width,
      height:this.state.height,

    };

    //console.log('pickup =>' +JSON.stringify(pickup));

    //SenderService.addPickup(pickup).then(res =>{
    //console.log(pickup);
    this.props.navigate("/pickupConformComponent", { state: { pickup } });

    //});
  };

  cancel() {
    this.props.history.push("/PickupConformComponent");
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <div className="card col-md-12 ">
              <div className="card-body">
                <Row>
                  <h3>Pick up Form</h3>
                </Row>

                {/* Sender Part */}

                <Row className="g-2">
                  <h4>Sender Details</h4>

                  <Col md>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Sender Name"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        value={this.state.senderName}
                        onChange={this.changeSenderNameHandler}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Sender Phone Number"
                    >
                      <Form.Control
                        type="tel"
                        placeholder="0---------"
                        value={this.state.senderPhoneNo}
                        onChange={this.changeSenderPhoneHandler}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Email address"
                    >
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        value={this.state.senderEmail}
                        onChange={this.changeSenderEmailHandler}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <br></br>
                <Row className="g-2">
                  <Col md>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Sender Address"
                    >
                      <Form.Control
                        type="text"
                        placeholder="No. 52, -----"
                        value={this.state.senderAddress}
                        onChange={this.changeSenderAddressHandler}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Sender Postal Code"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Postal code"
                        value={this.state.senderPostalCode}
                        onChange={this.changeSenderPostalCodeHandler}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Sender's District"
                    >
                      <Form.Select
                        aria-label="Floating label select example"
                        value={this.state.senderDistrict}
                        onChange={this.changeSenderDistrictHandler}
                      >
                        {districts.map((dis) => (
                          <option value={dis.value}>{dis.label}</option>
                        ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
                <br></br>

                {/* Recever Part */}

                <Row className="g-2">
                  <h4>Reciever Details</h4>
                  <Col md>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Receiver Name"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        value={this.state.receiverName}
                        onChange={this.changeReceiverNameHandler}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Receiver Phone Number"
                    >
                      <Form.Control
                        type="tel"
                        placeholder="0---------"
                        value={this.state.receiverPhoneNo}
                        onChange={this.changeReceiverPhoneHandler}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <br></br>
                <Row className="g-2">
                  <Col md>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Receiver Address"
                    >
                      <Form.Control
                        type="text"
                        placeholder="No. 52, -----"
                        value={this.state.receiverAddress}
                        onChange={this.changeReceiverAddressHandler}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="reciever Postal Code"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Postal code"
                        value={this.state.receiverPostalCode}
                        onChange={this.changeReceiverPostalCodeHandler}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Reciever District"
                    >
                      <Form.Select
                        aria-label="Floating label select example"
                        value={this.state.receiverDistrict}
                        onChange={this.changeReceiverDistrictHandler}
                      >
                        {districts.map((district) => (
                          <option value={district.value}>
                            {district.label}
                          </option>
                        ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
                <br></br>

                {/* Pickup Part */}
                <Row className="g-2">
                  <h4>Pick up details</h4>
                  <Col md>
                    <InputGroup>
                      <FloatingLabel
                        controlId="floatingInputGrid"
                        label="Pick up Date"
                      >
                        <Form.Control
                          type="date"
                          placeholder="12:12:1212"
                          value={this.state.pickupDate}
                          onChange={this.changePickupDateHandler}
                        />
                      </FloatingLabel>

                      <FloatingLabel controlId="floatingInputGrid" label="From">
                        <Form.Control
                          type="time"
                          placeholder="00"
                          value={this.state.timeFrom}
                          onChange={this.changeTimeFromHandler}
                        />
                      </FloatingLabel>

                      <FloatingLabel controlId="floatingInputGrid" label="To">
                        <Form.Control
                          type="time"
                          placeholder="00"
                          value={this.state.timeTo}
                          onChange={this.changeTimeToHandler}
                        />
                      </FloatingLabel>
                    </InputGroup>
                  </Col>

                  <Col md>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Post method"
                    >
                      <Form.Select
                        aria-label="Floating label select example"
                        value={this.state.postMethod}
                        onChange={this.changePostMethodeHandler}
                      >
                        {postMethods.map((postMethod) => (
                          <option value={postMethod.value}>
                            {postMethod.label}
                          </option>
                        ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Col>

                  <Col md>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="payment type"
                    >
                      <Form.Select
                        aria-label="Floating label select example"
                        value={this.state.paymentType}
                        onChange={this.changePaymentTypeHandler}
                      >
                        {paymentTypes.map((paymentType) => (
                          <option value={paymentType.value}>
                            {paymentType.label}
                          </option>
                        ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                </Row>
                <br></br>
                <Row className="g-2">
                  <Col md>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Vehicle type"
                    >
                      <Form.Select
                        aria-label="Floating label select example"
                        value={this.state.vehicleType}
                        onChange={this.changeVehicleTypeHandler}
                      >
                        {vehicleTypes.map((vehicleType) => (
                          <option value={vehicleType.value}>
                            {vehicleType.label}
                          </option>
                        ))}
                      </Form.Select>
                    </FloatingLabel>
                  </Col>

                  <Col md>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Special Notes"
                    >
                      <Form.Control
                        type="text"
                        placeholder="note"
                        value={this.state.spetialNote}
                        onChange={this.changeSpetialNoteHandler}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col md>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Cost of parcel"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Cost"
                        value={this.state.cost}
                        onChange={this.changeCostHandler}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <br></br>
                <Row className="g-2">
                  <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="weight (g)">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter weight"
                        name="weight"
                        onChange={this.changeWeightHandler}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid address.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="lenght (cm)">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter lenght"
                        name="length"
                        onChange={this.changelengthHandler}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid address.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                  <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="width (cm)">
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter width"
                        name="width"
                        onChange={this.changeWidthHandler}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid address.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>

                  <Col md>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Height (cm)"
                    >
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter heightt"
                        name="height"
                        onChange={this.changeHeightHandler}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid address.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                  </Col>
                </Row>

                <br></br>

                <Button className="btn btn-success" onClick={this.savePickup}>
                  {" "}
                  Check Out
                </Button>
                <Button
                  className="btn btn-danger"
                  onClick={this.cancel.bind(this)}
                  style={{ marginLeft: "10px" }}
                >
                  {" "}
                  Cancel
                </Button>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withRouter(PickUpFormComponent);
