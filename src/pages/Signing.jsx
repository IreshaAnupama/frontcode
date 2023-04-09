import React, { useState } from 'react'
import TopNav from '../components/TopNav';
import './Pages.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';

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
        useName:"",

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
   
    
    <div className='bg-sign' >
    <div className='wrapper  d-flex align-items-center justify-content-center '>
      <div className='login' >
        <h2 className='mb-3'>Sign in here </h2>
        
        <Form onSubmit={handleSubmit}>

        <div><InputGroup className="mb-4">
    <Form.Control placeholder={displayString}disabled />
        <Link to="/userMap" state={{data:1}} className="Link">
        <Button variant="outline-secondary" id="button-addon2">
          Enter your location
        </Button></Link>
      </InputGroup></div>


        <Form.Group className="mb-3" controlId="formBasicTell">
      <Form.Label>Phone number</Form.Label>
      <Form.Control type="text" placeholder="Enter your phone number" name="phoneNo" onChange={handleChange}/>
      <Form.Text className="text-muted">
        We'll never share your phone number with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
     
    </Form.Group>

    <Form.Group className="mb-3" >
<Form.Label>User name</Form.Label>
<Form.Control type="text" placeholder="Enter user name" name="userName" onChange={handleChange} />
</Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Show password" />
    </Form.Group>
   
      <Button variant="primary" type="submit">
      Sign as User
    </Button>{'  '}

   
   
   
  
  </Form>
  </div>
        

      </div>
    </div> 
  </>
  )
}

export default DriverSigning