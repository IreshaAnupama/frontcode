import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

export default class AddParcelComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            senderPhoneNo:'',
            cost:'',
            postMethod:'',
            length:'',
            height:'',
            width:'',
            weight:'',
            sendDate:'',
            address:'',
            city:'',
            district:''
            

        }
    }

    changeRecieverPhoneHandler=(event)=>{
        this.setState({senderPhoneNo:event.target.value});
    }

  render() {
    return (
      <div>
         <br></br>
        <Container>
            <Row>
            <div className="card col-md-12 ">
                <h1>Enter Parcel Details</h1>
            <div className="card-body">
            <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Reciever Phone number</Form.Label>
          <Form.Control placeholder="Enter Reciever's Phone number" 
            value={this.state.recieverPhoneNo} onChange={this.changeRecieverPhoneHandler}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCost">
          <Form.Label>Cost</Form.Label>
          <InputGroup className="mb-3">
        <InputGroup.Text>LKR</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest rupees)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDistrict">
          <Form.Label>PostMethod</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Same day</option>
            <option>24 hour</option>
            <option>2 Days</option>
            <option>5 Days</option>
            <option>within a weak</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="enter your full address" />
      </Form.Group>

      <br></br>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Nearest City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDistrict">
          <Form.Label>District</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Sending date</Form.Label>
          <Form.Control type='Date'/>
        </Form.Group>
      </Row>
      <br></br>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Weight</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Length</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Width</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Height</Form.Label>
          <Form.Control />
        </Form.Group>

        </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <br></br>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>

    </div>
            </Row>
        </Container>
      
      </div>
    )
  }
}
