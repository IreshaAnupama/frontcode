import React,{useState} from 'react'

import Form from 'react-bootstrap/Form';

import DriverNavbar from '../../components/Driver/DriverNavbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Figure from 'react-bootstrap/Figure';
import aboutimg2 from '../../img/image1.jpg';
import { useLocation } from 'react-router-dom';

function DriverProfile (props){
  const customer=useLocation().state?.data;
  
  const [details,setDetails]=useState({
    fullName:"",
    courierPhone: "",
email: "",
latitude: "",
longitude: "",
password: "",
courierUserName: "",
vehicleNo: "",
address: "",
district: "",
postalCode1: "",
postalCode2: "",
postalCode3: "",
    
});

const handleChange=(e) => {
  const{name,value} = e.target;
//console.log({[name]:value});
//details.fullName={[name.fullName]:value};
//details.longatitude=coordinate.lng;
//details.latitude=coordinate.lat;
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
    <><div><DriverNavbar></DriverNavbar></div>
      <div>
        <InputGroup className="mb-4">
          <Form.Control
                placeholder="location edit"
                aria-label="location edit"
                aria-describedby="basic-addon2"
              />
            <Nav.Link href="/userMap">
              <Button variant="outline-secondary" id="button-addon2">
                Edit your location
              </Button></Nav.Link>
        </InputGroup>
      </div>    
        <div >
          <Form onSubmit={handleSubmit}>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h1>Profile picture</h1>
                  <div>
                    <Figure>
                      <Figure.Image
                        width={171}
                        height={300}
                        className="rounded-circle"
                        src={aboutimg2}
                        alt="profile image"
                      />
                    </Figure>
                  </div>

                  <Button variant="primary" type="submit">
                          Upload new image
                  </Button>

                </div>
                <div class="col-8">
                  <div class="row">
                    <div class="col">

                      <Form.Group className="mb-3" controlId="formBasicText">
                          <Form.Label>Full Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter your name" name="fullName" onChange={handleChange}/>
                      </Form.Group>

                    </div>
                    <div class="row">
                      <div class="col">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                           <Form.Label>User Name</Form.Label>
                           <Form.Control type="text" placeholder={customer.courierUserName} name="courierUserName" onChange={handleChange}/>
                        </Form.Group>
          
      
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                          <Form.Label>Address</Form.Label>
                          <Form.Control type="text" placeholder={customer.address} name="address" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicText">
                          <Form.Label>District</Form.Label>
                          <Form.Control type="text" placeholder={customer.district} name="district" onChange={handleChange}/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Save changes
                        </Button>
                      </div>
                      <div class="col">
              
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                           <Form.Label>Email address</Form.Label>
                           <Form.Control type="email" placeholder={customer.email} name="email" onChange={handleChange}/>
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="formBasicPassword">
                           <Form.Label>Phone Number</Form.Label>
                           <Form.Control type="text" placeholder={customer.courierPhone} name="courierPhone" onChange={handleChange}/>
                         </Form.Group>

                         <Form.Group className="mb-3" controlId="formBasicText">
                             <Form.Label>vehicle Number</Form.Label>
                             <Form.Control type="text" placeholder={customer.vehicleNo} name="vehicleNo:" onChange={handleChange}/>
                         </Form.Group>
                      </div>
                    </div>
                  </div>
      
                </div>
              </div>
            </div>
          </Form>
      </div>
    
  </>
  )
}

export default DriverProfile

/*<Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Show password" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>*/