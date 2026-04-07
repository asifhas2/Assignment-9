import React, { use } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user,loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);
    if(loading){
       return <span className="loading loading-ring loading-md"></span>
    }
  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"> </Navigate>;
  }
 
};

export default PrivateRoute;
