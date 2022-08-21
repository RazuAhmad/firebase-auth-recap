import React, { useState } from "react";
import "./SignUpCompo.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import UseFirebaseAuth from "../../firebase/UseFirebaseAuth";
const SignUpCompo = () => {
  const [registered, setRegistered] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {
    signUpWithEmailPass,
    signInWithEmailPassword,
    errorMsg,
    resetPassword,
    emailPassSignedIn,
  } = UseFirebaseAuth();

  const { accessToken } = emailPassSignedIn;

  const handleCheckBox = (event) => {
    setRegistered(event.target.checked);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (registered) {
      signInWithEmailPassword(email, password);
    } else {
      signUpWithEmailPass(email, password);
    }
    console.log("submitted", email, password);
  };

  return (
    <div className="formMaster">
      <h2 className="text-primary">
        Please {registered ? "Sign In" : "Sign Up"}
      </h2>
      <br />
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            onChange={handleEmail}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            onChange={handlePassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onChange={handleCheckBox}
            type="checkbox"
            label="Already have an Account?"
          />
        </Form.Group>
        {errorMsg && <p>{errorMsg}</p>}
        {registered && <p> {accessToken ? "Successfully Signed In" : ""}</p>}
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button
          onClick={() => resetPassword(email)}
          style={{ marginLeft: "10px" }}
          variant="primary"
        >
          Forget Password?
        </Button>
      </Form>
    </div>
  );
};

export default SignUpCompo;
