import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import { Row } from 'react-bootstrap';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import Button from 'react-bootstrap/Button';
import './Pages.css';


import { GoogleMap, useJsApiLoader,Marker,useLoadScript } from '@react-google-maps/api';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const containerStyle = {
  width: '100%',
  height: '800px'
};


function MapForUser (props) {

  const pathForPage=useLocation().state?.data;
  console.log(pathForPage);
  const { isLoaded } = useJsApiLoader({
    id: 'my-project-cs304-371916',
    googleMapsApiKey: "AIzaSyD0Zw3uHJdRndDSN5OnCa1aflSbltWKtzg"
  })

  const [map, setMap] = React.useState(null)

  const [coordinates, setCoordinates] = useState({lat:6.927079, lng:79.861244});

  const handleDragEnd =(e) => {
    setCoordinates({lat:e.latLng.lat(), lng:e.latLng.lng()});
    console.log(coordinates);
  }

  const onLoad = React.useCallback(function callback(map) {
    
    const bounds = new window.google.maps.LatLngBounds(coordinates);
   map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const success="location saved";



  return isLoaded ? (
    <><div><TopNav></TopNav></div>
         <Container>
          <Row>
          <input style={{width:"100px"}}
            id="pac-input"
            class="controls"
            type="text"
            placeholder="Search Box"
          />          
            {pathForPage===1?
          <Link to="/signing"  state={{data: coordinates,success}} className="Link">
            <Button className="btn btn-success inline" > save location</Button></Link>
              :
              <Link to="/driverProfile"  state={{data: coordinates,success}} className="Link">
            <Button className="btn btn-success" > save location</Button>
            <Button className="btn btn-danger"  style={{marginLeft:"10px"}}> Cancel
          </Button>
          </Link>
          }
      
      </Row>
   
      
            <Row>
        <div className="card col-md-10 ">
               
               <div className="card-body">
               <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={9}
        onLoad={onLoad}
        onUnmount={onUnmount}
        
      >
        { <Marker
          position={coordinates}
          onDragEnd={handleDragEnd}
          draggable={true}
          />}
      </GoogleMap>
        </div>
    </div>
    </Row>
    </Container>
      </>
  ): <></>
}

export default  React.memo(MapForUser)