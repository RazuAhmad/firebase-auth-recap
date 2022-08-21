import React from "react";
import UseFirebaseAuth from "../../firebase/UseFirebaseAuth";

const GoogleGithubSignIn = () => {
  const {
    signInWithGoogle,
    signedInUser,
    errorMsg,
    signOutWithGoogle,
    signInWithGithub,
  } = UseFirebaseAuth();
  const { providedId, email, photoURL, displayName } = signedInUser;
  return (
    <div>
      <p>
        <img style={{ width: "20%" }} src={photoURL} alt="" />
      </p>
      <h1>Welcome {displayName}</h1>
      <h2>
        You are currently signed In As{" "}
        <span style={{ color: "red" }}> {displayName}</span>
      </h2>

      {email ? (
        <button onClick={signOutWithGoogle}>Sign Out With Google</button>
      ) : (
        <>
          <button onClick={signInWithGoogle}>Sign In With Google</button>
          <button onClick={signInWithGithub}>Log In With Github</button>
        </>
      )}
      <br />
      <br />
    </div>
  );
};

export default GoogleGithubSignIn;
