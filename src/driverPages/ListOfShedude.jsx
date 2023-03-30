import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

import profile1 from '../img/profile1.png';

function ListOfShedule() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
             <Row>
                <Col>No : 01</Col>
                <Col>Item no-ABR5423 </Col>
                <Col>Tel:-0779990007</Col>
            </Row> 
        </Accordion.Header>
        <Accordion.Body>
            <Card>
                <ListGroup variant="flush">
                
                    <ListGroup.Item>
                        <Row>
                            
                            <Col><h12>Distance</h12> </Col>
                            <Col>
                                <li>Arrivale date</li>
                            
                                <h12>15 january 2023</h12> 

                                <li>Sheduled date</li> 
                                <h12>23 january 2023</h12> 
                            </Col>
                        </Row> 
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img
                            className="rounded-circle"
                            width={50}
                            height={50}
                            src={profile1}
                            alt="First slide" />
                        parcel receiver no 1
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>
             <Row>
                <Col>No : 02</Col>
                <Col>Item no-ABR5423 </Col>
                <Col>Tel:-0779990007</Col>
            </Row> 
        </Accordion.Header>
        <Accordion.Body>
            <Card>
                <ListGroup variant="flush">
                
                    <ListGroup.Item>
                        <Row>
                            
                            <Col><h12>Distance</h12> </Col>
                            <Col>
                                <li>Arrivale date</li>
                            
                                <h12>15 january 2023</h12> 

                                <li>Sheduled date</li> 
                                <h12>23 january 2023</h12> 
                            </Col>
                        </Row> 
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img
                            className="rounded-circle"
                            width={50}
                            height={50}
                            src={profile1}
                            alt="First slide" />
                        parcel receiver no 1
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
             <Row>
                <Col>No : 03</Col>
                <Col>ItemNo :ABR5423 </Col>
                <Col>Tel: 0779990007</Col>
            </Row> 
        </Accordion.Header>
        <Accordion.Body>
            <Card>
                <ListGroup variant="flush">
                
                    <ListGroup.Item>
                        <Row>
                            
                            <Col><h12>Distance</h12> </Col>
                            <Col>
                                <li>Arrivale date</li>
                            
                                <h12>15 january 2023</h12> 

                                <li>Sheduled date</li> 
                                <h12>23 january 2023</h12> 
                            </Col>
                        </Row> 
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <img
                            className="rounded-circle"
                            width={50}
                            height={50}
                            src={profile1}
                            alt="First slide" />
                        parcel receiver no 1
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );
}

export default ListOfShedule;