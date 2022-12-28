import React, { Fragment } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "./login.module.css";

const Login = () => {
  return (
    <Fragment>
      <Container fluid className="login-container">
        <Row className="justify-content-md-center">
          <Form style={{ width: "50%", paddingTop: "5%", textAlign: "center" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Login;
