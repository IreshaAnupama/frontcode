import React from 'react'


import {Button,Card} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import TopNav from '../components/TopNav';
import './Pages.css';
import 'bootstrap/dist/css/bootstrap.min.css'
const login = () => {
  return (
    <><div><TopNav></TopNav></div>
      <div className='bg-log'>

      <div className='wrapper  d-flex align-items-center justify-content-center w-100'>
      <Card className='login' >
        <h2 className='mb-3'>Login Here</h2>
        
        <Form>
    
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="text" placeholder="Enter phone number" />
      <Form.Text className="text-muted">
        
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Show password" />
    </Form.Group>

    <Form.Group>
  
        <Button variant="primary" type="submit">
      Login as User
    </Button>{' '}{' '}
 
    <Button variant="primary" type="submit">
      Login as Driver
    </Button>
    </Form.Group>
  
    
    
  </Form>
  
      </Card>
      </div>
      </div>
      
    </>
  )
}

export default login