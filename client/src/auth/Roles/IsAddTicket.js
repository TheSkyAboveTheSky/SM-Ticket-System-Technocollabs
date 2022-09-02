import React from 'react';
import { Navigate } from 'react-router-dom';
import ProjectManagerAddTicket from '../../components/ProjectManagerComponents/Tickets/AddTickets/AddTicket';
const IsAddTicket = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
    switch(localStorage.getItem("user-roles")){
      case "3030" :
        return <ProjectManagerAddTicket />;
      case "4040" :
        return children;
      default :
        return <Navigate to="/UnAuthorized" replace />;
    }
};
export default IsAddTicket;