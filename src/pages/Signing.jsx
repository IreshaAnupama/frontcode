import React from 'react'
import TopNav from '../components/TopNav';
import './Pages.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Nav from 'react-bootstrap/Nav';

const Signing = () => {
  return (
    <><div><TopNav></TopNav></div><div className='bg-sign'>
    <div className='wrapper  d-flex align-items-center justify-content-center w-100'>
      <div className='login' >
        <h2 className='mb-3'>Sign in here </h2>
        
        <Form>
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
    <div><InputGroup className="mb-4">
    <Form.Control placeholder="ocation ID" disabled />
        <Nav.Link href="/userMap">
        <Button variant="outline-secondary" id="button-addon2">
          Enter your location
        </Button></Nav.Link>
      </InputGroup></div>
      <Button variant="primary" type="submit">
      Sign as User
    </Button>{'  '}
 
    <Button variant="primary" type="submit">
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