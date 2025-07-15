import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const access_token = localStorage.getItem("Response");
  if (!access_token) {
    return <Navigate to="/" />;
  }
  return children;
}
export default ProtectedRoutes;
