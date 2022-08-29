import React from 'react';
import { Navigate } from 'react-router-dom';
const NotAuthentificated = ({ redirectPath = "/", children }) => {
  if (localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  return children;
};
export default NotAuthentificated;