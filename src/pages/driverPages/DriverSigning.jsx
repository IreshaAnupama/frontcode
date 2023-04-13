import React from "react";
import Card from "react-bootstrap/Card";
import driverLog from "../img/driverLog.jpg";
const DriverSign = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <row>
        <col>
          <img
            src={driverLog}
            alt="https://www.freepik.com/free-vector/delivery-man-scooter-with-box-drives-city-street-night_12925267.htm?query=courier&collectionId=621&&position=0&from_view=collectionsImage by upklyak"
          />
        </col>
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
          <div>
            <InputGroup className="mb-4">
              <Form.Control placeholder="ocation ID" disabled />
              <Nav.Link href="/userMap">
                <Button variant="outline-secondary" id="button-addon2">
                  Enter your location
                </Button>
              </Nav.Link>
            </InputGroup>
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <col></col>
      </row>
    </Card>
  );
};

export default DriverSign;