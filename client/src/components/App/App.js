import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Taskboard from "../Tasks/Taskboard/Taskboard";
import AddTask from "../Tasks/addTask/AddTask";
import TimelineTasks from "../Timelines/TimelineTasks/TimelineTasks";
import TimelineLogs from "../Timelines/TimelineLogs/TimelineLogs";
import AddClient from "../Clients/AddClient/AddClient";
import Clientlist from "../Clients/Client-List/ClientList";
import AddTicket from "../Tickets/AddTickets/AddTicket";
import TicketList from "../Tickets/Ticket-list/TicketList";
import AddProject from "../Projects/Add-Projects/AddProject";
import CompletedProject from "../Projects/Completed-Projects/CompletedProject";
import UpComingProject from "../Projects/UpComing-Projects/UpComingProject";
import OnGoingProject from "../Projects/OnGoing-Projects/OnGoingProject";
import UnAuthorized from "../UnAuthorized/UnAuthorized";
import Test from "../Test/Test";
import IsAuthentificated from "../../auth/IsAuthentificated";
import NotAuthentificated from "../../auth/NotAuthentificated";
import Todo from "../Todo/Todo-List/Todo";
import AddTodo from "../Todo/addTodo/AddTodo";
import TicketDetails from "../Tickets/Ticket-details/TicketDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <IsAuthentificated>
              <Home />
            </IsAuthentificated>
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
          path="/Taskboard"
          element={
            <IsAuthentificated>
              <Taskboard />
            </IsAuthentificated>
          }
        />
        <Route
          path="/add-Task"
          element={
            <IsAuthentificated>
              <AddTask />
            </IsAuthentificated>
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
          path="/add-Client"
          element={
            <IsAuthentificated>
              <AddClient />
            </IsAuthentificated>
          }
        />
        <Route
          path="/Client-List"
          element={
            <IsAuthentificated>
              <Clientlist />
            </IsAuthentificated>
          }
        />
        <Route
          path="/add-Ticket"
          element={
            <IsAuthentificated>
              <AddTicket />
            </IsAuthentificated>
          }
        />
        <Route
          path="/Ticket-List"
          element={
            <IsAuthentificated>
              <TicketList />
            </IsAuthentificated>
          }
        />
        <Route
          path="/add-Project"
          element={
            <IsAuthentificated>
              <AddProject />
            </IsAuthentificated>
          }
        />
        <Route
          path="/completed-Project"
          element={
            <IsAuthentificated>
              <CompletedProject />
            </IsAuthentificated>
          }
        />
        <Route
          path="/ongoing-Project"
          element={
            <IsAuthentificated>
              <OnGoingProject />
            </IsAuthentificated>
          }
        />
        <Route
          path="/upcoming-Project"
          element={
            <IsAuthentificated>
              <UpComingProject />
            </IsAuthentificated>
          }
        />
        <Route
          path="/todo-list"
          element={
            <IsAuthentificated>
              <Todo />
            </IsAuthentificated>
          }
        />
        <Route
          path="/add-Todo"
          element={
            <IsAuthentificated>
              <AddTodo />
            </IsAuthentificated>
          }
        />
        <Route
          path="/Ticket-details/:id"
          element={
            <IsAuthentificated>
              <TicketDetails />
            </IsAuthentificated>
          }
        />
        <Route path="/test" element={<Test />} />
        <Route path="/UnAuthorized" element={<UnAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
