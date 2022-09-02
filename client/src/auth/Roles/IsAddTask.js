import React from 'react';
import { Navigate } from 'react-router-dom';
import ProjectManagerAddTask from '../../components/ProjectManagerComponents/Tasks/addTask/AddTask';
import EmployeeAddTask from '../../components/EmployeeComponents/Tasks/addTask/AddTask';
const IsAddTask = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  if (localStorage.getItem("user-roles") === "0000" || localStorage.getItem("user-roles") === "1010")
    return <Navigate to="/UnAuthorized" replace />;
  if (localStorage.getItem("user-roles") === "2020")
    return <EmployeeAddTask />
  if (localStorage.getItem("user-roles") === "3030")
    return <ProjectManagerAddTask />
  return children;
};
export default IsAddTask;