import React from 'react';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import Taskboard from '../Tasks/Taskboard/Taskboard';
import AddTask from '../Tasks/addTask/AddTask';
import TimelineTasks from '../Timelines/TimelineTasks/TimelineTasks';
import TimelineLogs from '../Timelines/TimelineLogs/TimelineLogs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Taskboard" element={<Taskboard/>} />
        <Route path="/add-Task" element={<AddTask />} />
        <Route path="/Timeline-Logs" element={<TimelineLogs />} />
        <Route path="/Timeline-Task" element={<TimelineTasks />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App