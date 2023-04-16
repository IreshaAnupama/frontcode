//Not working on back end

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
      "http://localhost:8080/user/1/userParcelList"
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
                  <th>Parcel Id</th>
                  <th>Parcel Cost</th>
                  <th>Delevery cost</th>
                </tr>
              </thead>
              <tbody>
                {parcels.map((parcel, index) => (
                  <tr>
                    <td>{parcel.id}</td>
                    <td>{parcel.parcelCost}</td>
                    <td>{parcel.deleveryCost}</td>
                  </tr>
                ))}
                
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserParcelList;
