import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Navigator from "../../components/Navigator";
import { Form, Button } from "react-bootstrap";
import { useRef } from "react";

const Register = () => {
  const [passwordError, setPasswordError] = useState(false);
  const fNameRef = useRef(null);
  const lNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const rPasswordRef = useRef(null);

  const validaForm = (e) => {
    e.preventDefault();
    const fname = fNameRef.current.value;
    const lname = lNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const rePassword = rPasswordRef.current.value;

    if (password === rePassword) {
      setPasswordError(false);
      console.log("setando false");
    } else {
      setPasswordError(true);
      console.log("setando true");
    }
  };

  return (
    <>
      <Navigator></Navigator>
      <p className="title">Use This form to Add a New user</p>
      <Form onSubmit={validaForm}>
        <Form.Group className="mb-3" controlId="formBasicFName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter First Name"
            ref={fNameRef}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" ref={lNameRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRPassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            ref={rPasswordRef}
          />
        </Form.Group>
        {passwordError && (
          <p className="pPassword"> The Password needs to be the same</p>
        )}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};

export default Register;
