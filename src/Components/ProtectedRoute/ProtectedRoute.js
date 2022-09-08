import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.init";

const ProtectedRoute = ({ children }) => {
  const [user] = useAuthState(auth);
  const location = useLocation();
  return user ? (
    children
  ) : (
    <Navigate to="/emailPassLogIn" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
