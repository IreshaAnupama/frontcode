import React from 'react'


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TopNav from '../components/TopNav';
import './Pages.css';
import 'bootstrap/dist/css/bootstrap.min.css'
const login = () => {
  return (
    <><div><TopNav></TopNav></div>
      <div className='bg-log'>

      <div className='wrapper  d-flex align-items-center justify-content-center w-100'>
      <div className='login' >
        <h2 className='mb-3'>Login Form</h2>
        
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

    <Form.Group>
  
        <Button variant="primary" type="submit">
      Login as User
    </Button>{' '}{' '}
 
    <Button variant="primary" type="submit">
      Login as Driver
    </Button>
    </Form.Group>
  
    
    
  </Form>
  
      </div>
      </div>
      </div>
      
    </>
  )
}

export default login