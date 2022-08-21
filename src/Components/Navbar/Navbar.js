import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
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
      </ul>
    </div>
  );
};

export default Navbar;
