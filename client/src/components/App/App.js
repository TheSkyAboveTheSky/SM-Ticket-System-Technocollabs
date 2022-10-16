import React from "react";
import { Routes, Route } from "react-router-dom";
// Protected Routes
import IsAuthentificated from "../../auth/IsAuthentificated";
import NotAuthentificated from "../../auth/NotAuthentificated";
import IsAdmin from "../../auth/Roles/IsAdmin";
import IsTaskboard from "../../auth/Roles/IsTaskboard";
import IsAddTask from "../../auth/Roles/IsAddTask";
import IsTicketList from "../../auth/Roles/IsTicketList";
import IsAddTicket from "../../auth/Roles/IsAddTicket";
import IsTicketDetails from "../../auth/Roles/IsTicketDetails";
import IsTodo from "../../auth/Roles/IsTodo";
import IsAddTodo from "../../auth/Roles/IsAddTodo";
import IsAddProject from "../../auth/Roles/Project/IsAddProject";
import IsCompletedProject from "../../auth/Roles/Project/IsCompletedProject";
import IsOnGoingProject from "../../auth/Roles/Project/IsOnGoingProject";
import IsUpComingProject from "../../auth/Roles/Project/IsUpComingProject";
import IsDashboard from "../../auth/Roles/IsDashboard";
// Shared Components
import Chat from "../SharedComponents/Chat/Chat/Chat";
import Login from "../SharedComponents/Login/Login";
import Register from "../SharedComponents/Register/Register";
import TimelineLogs from "../SharedComponents/Timelines/TimelineLogs/TimelineLogs";
import TimelineTasks from "../SharedComponents/Timelines/TimelineTasks/TimelineTasks";
import UnAuthorized from "../SharedComponents/UnAuthorized/UnAuthorized";
import NotFound from "../SharedComponents/NotFound/NotFound";
import Home from "../SharedComponents/Home/Home";
import Test from "../TestComponents/Test/Test";
import Profile from "../SharedComponents/Profile/Profile";
// Only Admin Components
import ClientList from "../AdminComponents/Clients/Client-List/ClientList";
import AddClient from "../AdminComponents/Clients/AddClient/AddClient";
// Role based Components
import Taskboard from "../AdminComponents/Tasks/Taskboard/Taskboard";
import AddTask from "../AdminComponents/Tasks/addTask/AddTask";
import TicketList from "../AdminComponents/Tickets/Ticket-list/TicketList";
import AddTicket from "../AdminComponents/Tickets/AddTickets/AddTicket";
import TicketDetails from "../AdminComponents/Tickets/Ticket-details/TicketDetails";
import AddTodo from "../AdminComponents/Todo/addTodo/AddTodo";
import Todo from "../AdminComponents/Todo/Todo-List/Todo";
import AddProject from "../AdminComponents/Projects/Add-Projects/AddProject";
import OnGoingProject from "../AdminComponents/Projects/OnGoing-Projects/OnGoingProject";
import UpComingProject from "../AdminComponents/Projects/UpComing-Projects/UpComingProject";
import CompletedProject from "../AdminComponents/Projects/Completed-Projects/CompletedProject";
import Dashboard from "../AdminComponents/Dashboard/Dashboard";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <IsDashboard>
            <Dashboard />
          </IsDashboard>
        }
      />
      <Route
        path="/login"
        element={
          <NotAuthentificated>
            <Login />
          </NotAuthentificated>
        }
      />
      <Route
        path="/register"
        element={
          <NotAuthentificated>
            <Register />
          </NotAuthentificated>
        }
      />
      <Route
        path="/add-Client"
        element={
          <IsAdmin>
            <AddClient />
          </IsAdmin>
        }
      />
      <Route
        path="/Client-List"
        element={
          <IsAdmin>
            <ClientList />
          </IsAdmin>
        }
      />
      <Route
        path="/Taskboard"
        element={
          <IsTaskboard>
            <Taskboard />
          </IsTaskboard>
        }
      />
      <Route
        path="/add-Task"
        element={
          <IsAddTask>
            <AddTask />
          </IsAddTask>
        }
      />
      <Route
        path="/Ticket-List"
        element={
          <IsTicketList>
            <TicketList />
          </IsTicketList>
        }
      />
      <Route
        path="/add-Ticket"
        element={
          <IsAddTicket>
            <AddTicket />
          </IsAddTicket>
        }
      />
      <Route
        path="/Ticket-details/:id"
        element={
          <IsTicketDetails>
            <TicketDetails />
          </IsTicketDetails>
        }
      />
      <Route
        path="/todo-list"
        element={
          <IsTodo>
            <Todo />
          </IsTodo>
        }
      />
      <Route
        path="/add-Todo"
        element={
          <IsAddTodo>
            <AddTodo />
          </IsAddTodo>
        }
      />
      <Route
        path="/Timeline-Logs"
        element={
          <IsAuthentificated>
            <TimelineLogs />
          </IsAuthentificated>
        }
      />
      <Route
        path="/Timeline-Task"
        element={
          <IsAuthentificated>
            <TimelineTasks />
          </IsAuthentificated>
        }
      />
      <Route
        path="/me"
        element={
          <IsAuthentificated>
            <Profile />
          </IsAuthentificated>
        }
      />
      <Route
        path="/add-Project"
        element={
          <IsAddProject>
            <AddProject />
          </IsAddProject>
        }
      />
      <Route
        path="/completed-Project"
        element={
          <IsCompletedProject>
            <CompletedProject />
          </IsCompletedProject>
        }
      />
      <Route
        path="/ongoing-Project"
        element={
          <IsOnGoingProject>
            <OnGoingProject />
          </IsOnGoingProject>
        }
      />
      <Route
        path="/upcoming-Project"
        element={
          <IsUpComingProject>
            <UpComingProject />
          </IsUpComingProject>
        }
      />
      <Route
        path="/chat"
        element={
          <IsAuthentificated>
            <Chat />
          </IsAuthentificated>
        }
      />
      <Route path="/test" element={<Test />} />
      <Route path="/UnAuthorized" element={<UnAuthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
