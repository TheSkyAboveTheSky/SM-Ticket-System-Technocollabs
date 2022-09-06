import React from "react";
import { Navigate } from "react-router-dom";
import ProjectManagerUpComingProject from "../../../components/ProjectManagerComponents/Projects/UpComing-Projects/UpComingProject";
import EmployeeUpComingProject from "../../../components/EmployeeComponents/Projects/UpComing-Projects/UpComingProject"
;
const IsUpComingProject = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  switch (localStorage.getItem("user-roles")) {
    case "3030":
      return <ProjectManagerUpComingProject/>;
    case "4040":
      return children;
    case "2020" :
      return <EmployeeUpComingProject />;
    default:
      return <Navigate to="/UnAuthorized" replace />;
  }
};
export default IsUpComingProject;
