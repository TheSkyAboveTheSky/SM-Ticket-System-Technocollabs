import React from "react";
import { Navigate } from "react-router-dom";
import ProjectManagerTicketList from "../../components/ProjectManagerComponents/Tickets/Ticket-list/TicketList";
import EmployeeTicketList from "../../components/EmployeeComponents/Tickets/Ticket-list/TicketList";
const IsTicketList = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  switch (localStorage.getItem("user-roles")) {
    case "2020":
      return <EmployeeTicketList />;
    case "3030":
      return <ProjectManagerTicketList />;
    case "4040":
      return children;
    default:
      return <Navigate to="/UnAuthorized" replace />;
  }
};
export default IsTicketList;
