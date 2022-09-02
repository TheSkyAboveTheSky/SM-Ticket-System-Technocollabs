import React from "react";
import { Navigate } from "react-router-dom";
import ProjectManagerTodo from "../../components/ProjectManagerComponents/Todo/Todo-List/Todo";
import EmployeeTodo from "../../components/EmployeeComponents/Todo/Todo-List/Todo";
const IsTodo = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  switch (localStorage.getItem("user-roles")) {
    case "2020" :
      return <EmployeeTodo />
    case "3030":
      return <ProjectManagerTodo />;
    case "4040":
      return children;
    default:
      return <Navigate to="/UnAuthorized" replace />;
  }
};
export default IsTodo;
