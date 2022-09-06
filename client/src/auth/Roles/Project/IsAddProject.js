import React from 'react';
import { Navigate } from 'react-router-dom';
import ProjectManagerAddProject from '../../../components/ProjectManagerComponents/Projects/Add-Projects/AddProject';
const IsAddProject = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  switch(localStorage.getItem("user-roles")){
    case "3030" :
      return <ProjectManagerAddProject />;
    case "4040" :
      return children;
    default :
      return <Navigate to="/UnAuthorized" replace />;
  }
};
export default IsAddProject;