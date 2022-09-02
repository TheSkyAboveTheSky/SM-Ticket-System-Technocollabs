import React from 'react';
import { Navigate } from 'react-router-dom';
import ProjectManagerAddTicket from '../../components/ProjectManagerComponents/Tickets/AddTickets/AddTicket';
import EmployeeAddTicket from '../../components/EmployeeComponents/Tickets/AddTickets/AddTicket';
const IsAddTicket = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  if (localStorage.getItem("user-roles") === "0000" || localStorage.getItem("user-roles") === "1010")
    return <Navigate to="/UnAuthorized" replace />;
  if (localStorage.getItem("user-roles") === "2020")
    return <EmployeeAddTicket />
  if (localStorage.getItem("user-roles") === "3030")
    return <ProjectManagerAddTicket />
  return children;
};
export default IsAddTicket;