import React from 'react';
import { Navigate } from 'react-router-dom';
import ProjectManagerTaskboard from '../../components/ProjectManagerComponents/Tasks/Taskboard/Taskboard';
import EmployeeTaskboard from '../../components/EmployeeComponents/Tasks/Taskboard/Taskboard';
const IsTaskboard = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  if (localStorage.getItem("user-roles") === "0000" || localStorage.getItem("user-roles") === "1010")
    return <Navigate to="/UnAuthorized" replace />;
  if (localStorage.getItem("user-roles") === "2020")
    return <EmployeeTaskboard />
  if (localStorage.getItem("user-roles") === "3030")
    return <ProjectManagerTaskboard />
  return children;
};
export default IsTaskboard;