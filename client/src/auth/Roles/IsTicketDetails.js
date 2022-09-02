import React from "react";
import { Navigate } from "react-router-dom";
import ProjectManagerTicketDetails from "../../components/ProjectManagerComponents/Tickets/Ticket-details/TicketDetails";
import EmployeeTicketDetails from "../../components/EmployeeComponents/Tickets/Ticket-details/TicketDetails";
const IsTicketDetails = ({ redirectPath = "/login", children }) => {
  if (!localStorage.getItem("x-auth-token"))
    return <Navigate to={redirectPath} replace />;
  if (!localStorage.getItem("user-roles"))
    return <Navigate to={redirectPath} replace />;
  switch (localStorage.getItem("user-roles")) {
    case "2020" :
      return <EmployeeTicketDetails />
    case "3030":
      return <ProjectManagerTicketDetails />;
    case "4040":
      return children;
    default:
      return <Navigate to="/UnAuthorized" replace />;
  }
};
export default IsTicketDetails;
