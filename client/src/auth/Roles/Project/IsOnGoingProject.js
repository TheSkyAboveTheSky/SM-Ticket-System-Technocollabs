import React from "react";
import { Navigate } from "react-router-dom";
import ProjectManagerOnGoingProject from "../../../components/ProjectManagerComponents/Projects/OnGoing-Projects/OnGoingProject";
import EmployeeOnGoingProject from "../../../components/EmployeeComponents/Projects/OnGoing-Projects/OnGoingProject";

const IsOnGoingProject = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  switch (localStorage.getItem("user-roles")) {
    case "3030":
      return <ProjectManagerOnGoingProject />;
    case "4040":
      return children;
    case "2020" :
      return <EmployeeOnGoingProject />;
    default:
      return <Navigate to="/UnAuthorized" replace />;
  }
};
export default IsOnGoingProject;