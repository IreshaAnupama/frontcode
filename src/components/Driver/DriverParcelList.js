import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import axios from "axios";

function DriverParcelList() {
  const [parcels, setParcels] = useState([]);
  useEffect(() => {
    loadParcels();
  }, []);
  const loadParcels = async () => {
    const result = await axios.get(
      "http://localhost:8080/user/1/driverParcelList"
    );
    setParcels(result.data);
    console.log(result);
  };
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Phone Number</th>
                  <th>name</th>
                  <th>Address</th>
                  <th>Date</th>
                  <th>Time from</th>
                  <th>Time to</th>
                  <th>payment type</th>
                  <th>Special Note</th>
                  <th>Parcel Cost</th>
                  <th>Delevery cost</th>
                </tr>
              </thead>
              <tbody>
                {parcels.map((parcel, index) => (
                  <tr>
                    <td>{parcel.phoneNo}</td>
                    <td>{parcel.senderUserName}</td>
                    <td>{parcel.address}</td>
                    <td>{parcel.date}</td>
                    <td>{parcel.timeFrom}</td>
                    <td>{parcel.timeTo}</td>
                    <td> {parcel.paymentType} </td>
                    <td> {parcel.specialNote} </td>
                    <td> {parcel.parcelCost} </td>
                    <td> {parcel.deleveryCost} </td>
                  </tr>
                ))}
                ;
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DriverParcelList;
