import React from 'react';
import { Navigate } from 'react-router-dom';
import ProjectManagerTicketList from '../../components/ProjectManagerComponents/Tickets/Ticket-list/TicketList';
import EmployeeTicketList from '../../components/EmployeeComponents/Tickets/Ticket-list/TicketList';
const IsTicketList = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  if (localStorage.getItem("user-roles") === "0000" || localStorage.getItem("user-roles") === "1010")
    return <Navigate to="/UnAuthorized" replace />;
  if (localStorage.getItem("user-roles") === "2020")
    return <EmployeeTicketList />
  if (localStorage.getItem("user-roles") === "3030")
    return <ProjectManagerTicketList />
  return children;
};
export default IsTicketList;