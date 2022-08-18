import React, { useState } from "react";
import "./App.css";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import firebaseInitialization from "./firebase/firebase.init";
const auth = getAuth(firebaseInitialization);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const App = () => {
  const [signedInUser, setSignedInUser] = useState({});
  const handleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setSignedInUser(result?.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out");
        setSignedInUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSignedInUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const { providedId, email, photoURL, displayName } = signedInUser;
  return (
    <div className="appContainer">
      <p>
        <img style={{ width: "20%" }} src={photoURL} alt="" />
      </p>
      <h1>Welcome {displayName}</h1>
      <h2>
        You are currently signed In As{" "}
        <span style={{ color: "red" }}> {displayName}</span>
      </h2>

      {photoURL ? (
        <button onClick={handleSignOut}>Sign Out With Google</button>
      ) : (
        <>
          <button onClick={handleSingIn}>Sign In With Google</button>
          <button onClick={handleGitHub}>Log In With Github</button>
        </>
      )}
      <br />
      <br />
    </div>
  );
};

export default App;
