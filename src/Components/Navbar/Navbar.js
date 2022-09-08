import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user?.email);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      <ul className="navbarUl">
        <li>
          {" "}
          <Link to="/home">Home</Link>{" "}
        </li>
        <li>
          <Link to="/clickToSignIn">Click to Sign In Component</Link>
        </li>
        <li>
          <Link to="/emailPassLogIn">Sign In With Email Pass</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>

        {user && (
          <li>
            <button onClick={() => logout()}>Log out</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
