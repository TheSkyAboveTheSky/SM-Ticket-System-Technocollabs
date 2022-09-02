import React from 'react';
import { Navigate } from 'react-router-dom';
const IsAdmin = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  if (localStorage.getItem("user-roles") != "4040")
    return <Navigate to="/UnAuthorized" replace />;
  return children;
};
export default IsAdmin;