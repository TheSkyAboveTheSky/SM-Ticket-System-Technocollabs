import React from 'react';
import { Navigate } from 'react-router-dom';
const IsAuthentificated = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  return children;
};
export default IsAuthentificated;