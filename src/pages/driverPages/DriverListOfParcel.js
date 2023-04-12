import React from 'react'
import DriverParcelList from '../../components/Driver/DriverParcelList'
import { Container,Row,Col } from 'react-bootstrap'

function DriverListOfParcel() {
  return (
    <div>
        <Container>
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