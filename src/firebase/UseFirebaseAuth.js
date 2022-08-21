import React from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import firebaseInitialization from "./firebase.init";
const auth = getAuth(firebaseInitialization);
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const UseFirebaseAuth = () => {
  const [signedInUser, setSignedInUser] = useState({});
  const [emailPassSignedIn, setEmailPassSignedIn] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setErrorMsg("");
        setSignedInUser(result?.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMsg(errorCode);
        console.log(errorCode);
      });
  };

  const signOutWithGoogle = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out");
        setSignedInUser({});
        setErrorMsg("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMsg(error);
      });
  };

  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setErrorMsg("");
        setSignedInUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMsg(errorCode);
        console.log(errorCode);
      });
  };

  const emailVerification = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("Email verification sent");
    });
  };

  const signUpWithEmailPass = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        emailVerification();
        console.log(user);
        setErrorMsg("");

        setEmailPassSignedIn(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        setErrorMsg(errorCode);
        console.error(errorCode);
      });
  };

  const signInWithEmailPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setEmailPassSignedIn(user);
        setErrorMsg("");
        console.log(user);
      })
      .catch((error) => {
        // const errorCode=error.code;
        setErrorMsg(error.message);
        // console.log(error.message);
      });
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent");
        setErrorMsg("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  return {
    signInWithGoogle,
    signedInUser,
    errorMsg,
    signOutWithGoogle,
    signInWithGithub,
    signUpWithEmailPass,
    signInWithEmailPassword,
    emailPassSignedIn,
    emailVerification,
    resetPassword,
  };
};

export default UseFirebaseAuth;
