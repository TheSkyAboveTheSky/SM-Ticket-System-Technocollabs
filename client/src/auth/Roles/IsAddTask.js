import React from 'react';
import { Navigate } from 'react-router-dom';
import ProjectManagerAddTask from '../../components/ProjectManagerComponents/Tasks/addTask/AddTask';
const IsAddTask = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  switch(localStorage.getItem("user-roles")){
    case "3030" :
      return <ProjectManagerAddTask />;
    case "4040" :
      return children;
    default :
      return <Navigate to="/UnAuthorized" replace />;
  }
};
export default IsAddTask;