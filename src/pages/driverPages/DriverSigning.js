import React, { useState } from 'react'
import TopNav from '../../components/TopNav';

import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';
import { Container ,Row} from 'react-bootstrap';

function  DriverSigning(props){

  const location=useLocation();
  //console.log(location);
  const coordinate=location.state?.data;
  const displayString= location.state?.success;
  //const lat=coordinate.lat;
  //const lng=coordinate.lng;
  
  

  const [details,setDetails]=useState({
        phoneNo:"",
        email:"",
        password:"",
        latitude:"",
        longatitude:"",
        userName:"",
        vehicleNo:""

  });
  
  const handleChange=(e) => {
    const{name,value} = e.target;
    details.longatitude=coordinate.lng;
    details.latitude=coordinate.lat;
    setDetails((prev) => {
      return { ...prev,[name]:value};

    });

  };

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <><div><TopNav></TopNav></div>
   
    
   <div style={{padding:40}}>
    
   <Container>
   <Row className="justify-content-md-center">
   

     <div className="card col-md-4 ">
      <h3>Driver signing</h3>
  

        <Form onSubmit={handleSubmit}>

        <div><InputGroup className="mb-4">
    <Form.Control placeholder={displayString}disabled />
        <Link to="/userMap" state={{data:1}} className="Link">
        <Button variant="outline-secondary" id="button-addon2">
          Enter your location
        </Button></Link>
      </InputGroup></div>


        <Form.Group className="mb-3" controlId="driverSigningForm">
      <Form.Label>Phone number</Form.Label>
      <Form.Control type="text" placeholder="Enter your phone number" name="phoneNo" onChange={handleChange}/>
      <Form.Text className="text-muted">
        We'll never share your phone number with anyone else.
      </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" >
<Form.Label>User name</Form.Label>
<Form.Control type="text" placeholder="Enter user name" name="userName" onChange={handleChange} />
</Form.Group>


      <Form.Group className="mb-3" >
<Form.Label>Vehicle Number</Form.Label>
<Form.Control type="text" placeholder="Enter vehicle number" name="vehicleNo" onChange={handleChange} />
</Form.Group>


      <Form.Group className="mb-3" >
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
      
      <Form.Check type="checkbox" label="Show password" />
    </Form.Group>


    <Link to={"/driverProfile"} state={{data:details}} className="Link"><Button variant="primary" type="submit">
      Sign as Driver
    </Button></Link>
   
  </Form>
  </div>
  </Row>
  </Container>
  </div>
  </>
        

  )
}

export default DriverSigning