
import "../pages/globals.css";
import DriverNavbar from '../components/Driver/DriverNavbar';
import { useLocation } from 'react-router-dom';
import profile1 from "../img/profile1.png";
import {
  Button,
  Container,
  Row,
  Col,
  Accordion,
  Card,
  ListGroup,
} from "react-bootstrap";

import { useState,  } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "@reach/combobox/styles.css";



export default function MarkersMap() {
  const {isLoaded, loadError} = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDwtBza38O5StjIz7dPbWDcX8BK-JSD2z0",
    
  });

  

  const parcelList=useLocation().state?.data2;
  
  console.log(parcelList)


  if (!isLoaded) return <div> looading....</div>;
  return (
    <><div><DriverNavbar></DriverNavbar></div><Container>
      <Row>
        <Col>
          <Map />
        </Col>
        <Col>
          <div>
            {parcelList.map((parcel, index) => (
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <Row>
                      <Col>No :{parcel.position}</Col>
                      <Col>Item no-{parcel.parcelId} </Col>
                      <Col>Tel:-{parcel.customerPhone}</Col>
                    </Row>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Card>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          <Row>
                            <Col>
                              <h5>Distance : {parcel.distance}</h5>{" "}
                            </Col>
                            <Col>
                              {/*<li>Arrivale date</li>
            <h1>15 january 2023</h1>
            <li>Sheduled date</li>
<h1>23 january 2023</h1> */}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          {/*<img
              className="rounded-circle"
              width={50}
              height={50}
              src={profile1}
              alt="First slide"
/>*/}
                          Parcel owner : {parcel.customerUserName}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
          </div>
        </Col>
      </Row>


    </Container></>
  );
}

function Map() {
  const markers=useLocation().state?.data;
  console.log(markers)
    /*const [markers, setMarkers] = useState([
        { lat: 7.522634500000001, lng: 79.8324755 },
        { lat: 7.412487, lng: 79.859083 },
        { lat: 7.465026, lng: 79.8697312 },
      ]);*/
  
  
  const [selected, setSelected] = useState({ lat: 7.465025999999999, lng: 79.86973119999999 });
  console.log(selected);
  const renderMarkers = () => {
    return markers.map((location, index) => {
      return (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          label={`${index + 1}`}
        />
      );
    });
  };

  return (
    <>
      <GoogleMap
        zoom={12}
        center={selected}
        mapContainerClassName="map-container"
      >
        {renderMarkers()}
      </GoogleMap>
    </>
  );
}
