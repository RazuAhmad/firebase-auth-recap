import React from "react";
import "./SignInWithEmailPass.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";

const SignInWithEmailPass = () => {
  // const { signInWithEmailPass, errorMsg, signedInUser, emailPassSignedIn } =
  //   UseFirebaseAuth();

  const [signInWithEmailAndPassword, user, error, loading] =
    useSignInWithEmailAndPassword(auth);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
    console.log(error?.message);
    console.log(user);
  };

  return (
    <>
      <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
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
        <input type="submit" value="Sign In" />
      </form>
      {error && <p style={{ color: "red" }}>{error?.message}</p>}
      {user && <p>Signed In Successfully</p>}
      <p className="signUpBtn">
        New User?{" "}
        <Link to="/singUp">
          <button>Sign Up now!</button>
        </Link>
      </p>
    </>
  );
};

export default SignInWithEmailPass;
