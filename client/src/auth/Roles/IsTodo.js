import React from 'react';
import { Navigate } from 'react-router-dom';
import ProjectManagerTodo from '../../components/ProjectManagerComponents/Todo/Todo-List/Todo';
import EmployeeTodo from '../../components/EmployeeComponents/Todo/Todo-List/Todo';
const IsTodo = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  if (localStorage.getItem("user-roles") === "0000" || localStorage.getItem("user-roles") === "1010")
    return <Navigate to="/UnAuthorized" replace />;
  if (localStorage.getItem("user-roles") === "2020")
    return <EmployeeTodo />
  if (localStorage.getItem("user-roles") === "3030")
    return <ProjectManagerTodo />
  return children;
};
export default IsTodo;