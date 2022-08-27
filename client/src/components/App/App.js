import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Taskboard" element={<Taskboard />} />
        <Route path="/add-Task" element={<AddTask />} />
        <Route path="/Timeline-Logs" element={<TimelineLogs />} />
        <Route path="/Timeline-Task" element={<TimelineTasks />} />
        <Route path="/add-Client" element={<AddClient />} />
        <Route path="/Client-List" element={<Clientlist />} />
        <Route path="/add-Ticket" element={<AddTicket />} />
        <Route path="/Ticket-List" element={<TicketList />} />
        <Route path="/add-Project" element={<AddProject />} />
        <Route path="/completed-Project" element={<CompletedProject />} />
        <Route path="/ongoing-Project" element={<OnGoingProject />} />
        <Route path="/upcoming-Project" element={<UpComingProject />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
