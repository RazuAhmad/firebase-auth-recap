import { signOut } from "firebase/auth";
import React from "react";
// import UseFirebaseAuth from "../../firebase/UseFirebaseAuth";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
  useAuthState,
} from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
const GoogleGithubSignIn = () => {
  // const {
  //   signInWithGoogle,
  //   signedInUser,
  //   errorMsg,
  //   signOutWithGoogle,
  //   signInWithGithub,
  // } = UseFirebaseAuth();

  const [signInWithGoogle, user] = useSignInWithGoogle(auth);

  // const [signInWithGithub] = useSignInWithGithub(auth);
  // const [user, error] = useAuthState(auth);
  // const { email, photoURL, displayName } = user?.user;
  console.log(user?.user);
  const logout = () => {
    signOut(auth);
  };

  return (
    <div>
      <p>
        <img style={{ width: "20%" }} src={user?.user?.photoURL} alt="" />
      </p>
      <h1>Welcome {user?.user?.displayName}</h1>
      <h2>
        You are currently signed In As{" "}
        <span style={{ color: "red" }}> {user?.user?.displayName}</span>
      </h2>

      {user ? (
        <button onClick={() => logout()}>Sign Out With Google</button>
      ) : (
        <>
          <button onClick={() => signInWithGoogle()}>
            Sign In With Google
          </button>
          {/* <button onClick={() => signInWithGithub()}>Log In With Github</button> */}
        </>
      )}
      <br />
      <br />
    </div>
  );
};

export default GoogleGithubSignIn;
