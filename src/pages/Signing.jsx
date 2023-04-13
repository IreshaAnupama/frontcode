import React, { useState } from 'react'
import TopNav from '../components/TopNav';
import './Pages.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { districts} from '../supportiveFiles/SelectList'

function  Signing(props){

  const navigate= useNavigate();

  function driverClick(){
   
    navigate ("/driverProfile" , {state:{data:details}});
    //state:{{data:details}} ></Navigate>

  }

  const location=useLocation();
  //console.log(location);
  const coordinate=location.state?.data;
  const displayString= location.state?.success;
  //const lat=coordinate.lat;
  //const lng=coordinate.lng;
  
  

  const [details,setDetails]=useState({
        phoneNo:"",
        userName:"",
        email:"",
        password:"",
        latitude:"",
        longatitude:"",
        address:"",
        district:"",
        postalCode:"",
        vehicleNo:"",
        

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
    return
  };

  return (
    <><div><TopNav></TopNav></div>
      <div className='bg-sign'>
        <div className='wrapper  d-flex align-items-center justify-content-center w-100'>
          <div className='login' >
            <h2 className='mb-3'>Sign in here </h2>
            <Form onSubmit={handleSubmit}>
              <div>
                <InputGroup className="mb-4">
                  <Form.Control placeholder={displayString}disabled />
                    <Link to="/userMap" state={{data:1}} className="Link">
                      <Button variant="outline-secondary" id="button-addon2">
                      Enter your location
                      </Button>
                    </Link>
                </InputGroup>
              </div>
              <Form.Group className="mb-3" controlId="formBasicTell">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" name="phoneNo" onChange={handleChange}/>
                  <Form.Text className="text-muted">
                    We'll never share your phone number with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasic">
                  <Form.Label>User name</Form.Label>
                  <Form.Control type="text" placeholder="Enter User name" name="userName" onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter Address" name="address" onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                   <Form.Label>District</Form.Label>
                      <Form.Select aria-label="Floating label select example"
                        name="district" onChange={handleChange}>
                        {districts.map((dis) => (
                          <option value={dis.value}>{dis.label}</option>
                        ))}
                      </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Postal code" name="postalCode" onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAddress">
                  <Form.Label>Vehicle Number</Form.Label>
                  <Form.Control type="text" placeholder="Enter Vehicle number" name="vehicleNo" onChange={handleChange} />
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

              
                <Button variant="primary" type="submit" onClick={driverClick} >
                Sign as Driver
                </Button>
              
            </Form>
          </div>


      </div>
    </div> 
  </>
  )
}

export default Signing
