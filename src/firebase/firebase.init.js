import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD7SM2LScbHbad4b3YFU_fVjQW86ssmNhs",
  authDomain: "fir-auth-recap-c950a.firebaseapp.com",
  projectId: "fir-auth-recap-c950a",
  storageBucket: "fir-auth-recap-c950a.appspot.com",
  messagingSenderId: "59555422516",
  appId: "1:59555422516:web:1f39e5caf738467f0a4561",
};

const firebaseInitialization = initializeApp(firebaseConfig);

const auth = getAuth(firebaseInitialization);

export default auth;
