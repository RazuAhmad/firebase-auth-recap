import React from "react";
import "./SignInWithEmailPass.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import UseFirebaseAuth from "../../firebase/UseFirebaseAuth";
const SignInWithEmailPass = () => {
  const { signInWithEmailPass, errorMsg, signedInUser, emailPassSignedIn } =
    UseFirebaseAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailPass(email, password);
  };
  const { email, accessToken } = emailPassSignedIn;
  console.log(emailPassSignedIn);
  return (
    <>
      <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
        {/* <p>
    <input
      required
      placeholder="enter your name"
      type="text"
      {...register("name")}
    />
  </p> */}
        {accessToken && <p style={{ color: "green" }}> user have been added</p>}
        {errorMsg && <p style={{ color: "red" }}>auth/email already in use</p>}

        <p>
          <input
            required
            placeholder="enter your email"
            type="email"
            {...register("email")}
          />
        </p>
        <p>
          <input
            required
            placeholder="enter your password"
            type="password"
            {...register("password")}
          />
        </p>
        <input type="submit" />
      </form>
      <p className="signUpBtn">
        New User?{" "}
        <Link to="/singUp">
          <button>Sign up now!</button>
        </Link>
      </p>
    </>
  );
};

export default SignInWithEmailPass;
