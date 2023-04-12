import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DriverNavbar from '../../components/Driver/DriverNavbar';
import UserMap from '../../components/UserMap';
import './DriverCss.css'


import ListOfShedule from './ListOfShedude'

const OrderOfShedule = () => {
  return (
    <div><div><DriverNavbar></DriverNavbar></div>
        <Container className="containerd">
      <Row>
        <Col xs={8}><UserMap>
          </UserMap></Col>
        <Col><ListOfShedule></ListOfShedule></Col>
      </Row>
      
    </Container>
    </div>
  )
}

export default OrderOfShedule