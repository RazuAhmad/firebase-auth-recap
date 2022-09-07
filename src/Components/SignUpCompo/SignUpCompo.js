import React, { useState } from "react";
import "./SignUpCompo.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
const SignUpCompo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  // const [errorMsg, setErrorMsg] = useState("");
  // const {
  //   signUpWithEmailPass,
  //   signInWithEmailPassword,
  //   errorMsg,
  //   resetPassword,
  //   emailPassSignedIn,
  // } = UseFirebaseAuth();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  // const { accessToken } = user;

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRetypePassword = (e) => {
    setRetypePassword(e.target.value);
  };

  // if (password.length < 6) {
  //   // setErrorMsg("Password must not be less than 6 character");
  //   return;
  // }
  // if (!password === retypePassword) {
  //   // setErrorMsg("Your both password need to be matched");
  //   return;
  // }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(email, password);
    // setErrorMsg("");
    // updateUserProfile(name);
    console.log(user, error);

    console.log("submitted", email, password);
  };

  return (
    <div className="formMaster">
      <h2 className="text-primary">Please Sign Up</h2>
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

        <Form.Group className="mb-3" controlId="formBasicRetypePassword">
          <Form.Label>Retype your Password</Form.Label>
          <Form.Control
            required
            onChange={handleRetypePassword}
            type="password"
            placeholder="Retype your Password"
          />
        </Form.Group>
        {/* {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>} */}
        {error && <p style={{ color: "red" }}>{error?.message}</p>}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Link to="/emailPassLogIn">
            <Button>Already have an Account?</Button>
          </Link>
        </Form.Group>
        {/* {errorMsg && <p>{errorMsg}</p>} */}
        {/* {registered && <p> {accessToken ? "Successfully Signed In" : ""}</p>} */}

        <input className="btn btn-primary" type="submit" value="Sign Up" />

        <Button
          // onClick={() => resetPassword(email)}
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
