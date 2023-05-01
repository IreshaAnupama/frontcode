import React from "react";
import DriverNavbar from '../components/Driver/DriverNavbar';
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../pages/globals.css";
import {
  Button,
  Container,
  Row,
  Col,
  Accordion,
  Card,
  ListGroup,
} from "react-bootstrap";
import profile1 from "../img/profile1.png";

const API_KEY = "AIzaSyCSPg-EKxxvO3YRJ-nMNTR2-mNQISqkz-k";

function WayPoint() {
  const [parcels, setParcels] = useState([]);
  const [parcel2, setParcel2] = useState([]);
  const [destination, setDestination] = useState([]);
  const [origin, setOrigin] = useState([]);
  const [detail, setDetail] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  let a = 0;
  const [markerList, setMarkerList] = useState([]);

  const navigate = useNavigate();
 
  
  function viewMap() {
    
    if(markerList.length>0){
      
        navigate("/markersMap", { state: { data: markerList, data2:parcel2 } });
      
    } else {
      console.log("lllll");
    }
  }

  const arr = [];
  const tsp = (graph) => {
    const n = graph.length;
    const visited = new Array(n).fill(false);
    visited[0] = true;
    let current = 0;
    let path = [0];
    let cost = 0;//full distance
    let distance = [0];//distance origin to destination

    for (let i = 0; i < n - 1; i++) {
      let minDist = Infinity;
      let nextNode = null;

      for (let j = 0; j < n; j++) {
        if (!visited[j] && graph[current][j] < minDist) {
          minDist = graph[current][j];
          nextNode = j;
        }
      }

      visited[nextNode] = true;
      path.push(nextNode);
      cost += minDist;
      distance.push(cost);
      current = nextNode;
    }

    cost += graph[current][0];
    path.push(0);

    return { path, cost, distance };
  };

  useEffect(() => {
    loadParcels();
  }, []);
  const loadParcels = async () => {
    const result = await axios.get(
      "http://localhost:8080/user/7/getCourierLocation"
    );
    const result2 = await axios.get(
      "http://localhost:8080/user/7/getCourierParcelsLocation"
    );
    setParcels(result.data);
    setParcel2(result2.data);
    console.log(result2.data);
    //console.log(result2.data.length);
    let modifiedData = [];
    modifiedData.push({
      waypoint: {
        location: {
          latLng: {
            latitude: result.data.latitude,
            longitude: result.data.longitude,
          },
        },
      },
    });
    for (let i = 0; i < result2.data.length; i++) {
      modifiedData.push({
        waypoint: {
          location: {
            latLng: {
              latitude: result2.data[i].latitude,
              longitude: result2.data[i].longitude,
            },
          },
        },
      });
      //destinationSet(result2.data[i]);
    }
    //setDestination(modifiedData);

    let detail = [];
    setDestination(modifiedData);
    setOrigin(modifiedData);
    fetch(
      "https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": API_KEY,
          "X-Goog-FieldMask":
            "originIndex,destinationIndex,duration,distanceMeters,condition",
        },
        body: JSON.stringify({
          origins: modifiedData,
          destinations: modifiedData,
          travelMode: "DRIVE",
          routingPreference: "TRAFFIC_AWARE",
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => setDetail(data))
      .catch((error) => console.error(error));

    console.log("end of effect");
  };

  const b4 = () => {
    console.log(parcel2);
    const sorted = [...parcel2].sort((a, b) => a.position - b.position);
    setParcel2(sorted);
  };

  const b5 = () => {
    console.log(parcel2);
    setShowDetail(true);
    let markers = [];
    for (let i = 0; i < parcel2.length; i++) {
      markers.push({ lat: parcel2[i].latitude, lng: parcel2[i].longitude });
    }
    console.log("new");
    console.log(markers);
    setMarkerList(markers)
    
  };

  const b3 = () => {
    console.log(detail);
    const length1 = Math.sqrt(detail.length);
    const graph = Array(length1)
      .fill()
      .map(() => Array(length1).fill());

    for (let i = 0; i < detail.length; i++) {
      //for (let j = 0; j <length1; j++){
      if (detail[i].originIndex === detail[i].destinationIndex) {
        graph[detail[i].originIndex][detail[i].destinationIndex] = 0;
        //console.log(i)
      } else if (detail[i].distanceMeters > 0) {
        let dis = detail[i].distanceMeters;
        graph[detail[i].originIndex][detail[i].destinationIndex] = dis;
        //console.log(dis)
        //graph[i][j]=
      } else {
        graph[detail[i].originIndex][detail[i].destinationIndex] = 0;
        //.log("rote problem")
      }
    }

    //
    console.log("graph[0][1]");
    const { path, cost, distance } = tsp(graph);
    console.log(path);
    console.log(cost);
    console.log(distance);
    for (let i = 1; i < path.length - 1; i++) {
      //let obj=parcel2[path[i]-1]
      parcel2[path[i] - 1].position = i;
      parcel2[path[i] - 1].distance = distance[i];
      //console.log(obj)

      //console.log(obj?.position)
      //console.log(path[i])
    }
  };

  return (
    <div>
      <div><DriverNavbar></DriverNavbar></div>
      <Container>
        <Row>
          <Col>
            <Button onClick={b3}>b3</Button>
            <Button onClick={b4}> b4</Button>
            <Button onClick={b5}> b5</Button>
          </Col>
        </Row>
        {showDetail && (
          <Row>
            <Row><Button onClick={viewMap}> view with map</Button><br></br></Row>
            
            <Row>
            <Col>
              <div>
                {parcel2.map((parcel, index) => (
                  <Accordion defaultActiveKey={["0"]} alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <Row>
                          <Col>No : {parcel.position}</Col>
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
                              <img
                                className="rounded-circle"
                                width={50}
                                height={50}
                                src={profile1}
                                alt="First slide"
                              />
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
          </Row>
        )}
      </Container>
    </div>
  );
}

export default WayPoint;
