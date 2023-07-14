import React from "react";
import { Navigate, Outlet } from "react-router-dom";



const PrivateRoute = () => {
  if (localStorage.getItem("currentUser")) {
    return (
      <Outlet />
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
