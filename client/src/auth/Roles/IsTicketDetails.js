import React from 'react';
import { Navigate } from 'react-router-dom';
import ProjectManagerTicketDetails from '../../components/ProjectManagerComponents/Tickets/Ticket-details/TicketDetails';
import EmployeeTicketDetails from '../../components/EmployeeComponents/Tickets/Ticket-details/TicketDetails';
const IsTicketDetails = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  if (localStorage.getItem("user-roles") === "0000" || localStorage.getItem("user-roles") === "1010")
    return <Navigate to="/UnAuthorized" replace />;
  if (localStorage.getItem("user-roles") === "2020")
    return <EmployeeTicketDetails />
  if (localStorage.getItem("user-roles") === "3030")
    return <ProjectManagerTicketDetails />
  return children;
};
export default IsTicketDetails;