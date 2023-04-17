import React from "react";
import "./login.css";
import login from "../assests/login.jpg";
import { Card, Form, Button } from "react-bootstrap";
const Login = () => {
  return (
    <>
      <div className="login">
        <h2>Login Page</h2>
        <Card className="section">
          <div className="leftsection">
            <img src={login} alt="login" />
          </div>
          <div className="rightsection">
            <Card className="rightsectioncard">
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
                  <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card>
          </div>
        </Card>
      </div>
    </>
  );
};
export default Login;
