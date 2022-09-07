import React from "react";
import { Navigate } from "react-router-dom";
import ProjectManagerDashboard from "../../components/ProjectManagerComponents/Dashboard/Dashboard";
import EmployeeDashboard from "../../components/EmployeeComponents/Dashboard/Dashboard";
const IsDashboard = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  switch (localStorage.getItem("user-roles")) {
    case "3030":
      return <ProjectManagerDashboard />;
    case "4040":
      return children;
    case "2020" :
      return <EmployeeDashboard />;
    default:
      return <Navigate to="/UnAuthorized" replace />;
  }
};
export default IsDashboard;
