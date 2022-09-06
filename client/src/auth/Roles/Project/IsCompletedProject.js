import React from "react";
import { Navigate } from "react-router-dom";
import ProjectManagerCompletedProject from "../../../components/ProjectManagerComponents/Projects/Completed-Projects/CompletedProject";
import EmployeeCompletedProject from "../../../components/EmployeeComponents/Projects/Completed-Projects/CompletedProject";

const IsCompletedProject = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  switch (localStorage.getItem("user-roles")) {
    case "3030":
      return <ProjectManagerCompletedProject />;
    case "4040":
      return children;
    case "2020" :
      return <EmployeeCompletedProject />;
    default:
      return <Navigate to="/UnAuthorized" replace />;
  }
};
export default IsCompletedProject;