import React from 'react'
import DriverParcelList from '../../components/Driver/DriverParcelList'
import { Container,Row,Col } from 'react-bootstrap'
import DriverNavbar from '../../components/Driver/DriverNavbar';

function DriverListOfParcel() {
  return (
    <div><div><DriverNavbar></DriverNavbar></div>
        <Container style={{padding:"20px"}}>
            <Row>
                <Col>
                    <DriverParcelList/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default DriverListOfParcel