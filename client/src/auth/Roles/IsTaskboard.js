import React from "react";
import { Navigate } from "react-router-dom";
import ProjectManagerTaskboard from "../../components/ProjectManagerComponents/Tasks/Taskboard/Taskboard";
import EmployeeTaskboard from "../../components/EmployeeComponents/Tasks/Taskboard/Taskboard";
const IsTaskboard = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  switch (localStorage.getItem("user-roles")) {
    case "3030":
      return <ProjectManagerTaskboard />;
    case "4040":
      return children;
    case "2020" :
      return <EmployeeTaskboard />;
    default:
      return <Navigate to="/UnAuthorized" replace />;
  }
};
export default IsTaskboard;
