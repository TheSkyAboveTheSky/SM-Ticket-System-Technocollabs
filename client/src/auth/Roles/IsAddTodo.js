import React from 'react';
import { Navigate } from 'react-router-dom';
import ProjectManagerAddTodo from '../../components/ProjectManagerComponents/Todo/addTodo/AddTodo';
import EmployeeAddTodo from '../../components/EmployeeComponents/Todo/addTodo/AddTodo';
const IsAddTodo = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  if (localStorage.getItem("user-roles") === "0000" || localStorage.getItem("user-roles") === "1010")
    return <Navigate to="/UnAuthorized" replace />;
  if (localStorage.getItem("user-roles") === "2020")
    return <EmployeeAddTodo />
  if (localStorage.getItem("user-roles") === "3030")
    return <ProjectManagerAddTodo />
  return children;
};
export default IsAddTodo;