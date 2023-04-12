import React from 'react'

import Form from 'react-bootstrap/Form';

import DriverNavbar from '../../components/Driver/DriverNavbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Figure from 'react-bootstrap/Figure';

import aboutimg2 from '../../img/image1.jpg';

const UserProfile = () => {
  return (
    <><div><DriverNavbar></DriverNavbar></div>
    <div><InputGroup className="mb-4">
        <Form.Control
          placeholder="location edit"
          aria-label="location edit"
          aria-describedby="basic-addon2"
        />
        <Nav.Link href="/userMap">
        <Button variant="outline-secondary" id="button-addon2">
          Edit your location
        </Button></Nav.Link>
      </InputGroup></div>
    

    <div >
        <Form>
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
            <Form.Control type="text" placeholder="Enter your name" />
            <Form.Text className="text-muted">
    
            </Form.Text>
        </Form.Group>
 
    </div>
    <div class="row">
        <div class="col">
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="enter your user name" />
            </Form.Group>
    

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="enter your address" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Wehicle Number</Form.Label>
            <Form.Control type="text" placeholder="enter your wehicle Number" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Save changes
            </Button>


        </div>
        <div class="col">
        
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="text" placeholder="enter your pass word" />
    </Form.Group>
    
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Wehicle Number</Form.Label>
                <Form.Control type="text" placeholder="enter your wehicle Number" />
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

export default UserProfile