import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import banner from "../../../assets/images/addTask.jpg";
import Axios from "../../Axios/Axios";
import Notification from "../../Notification/Notification";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function AddTask() {
  const [fullName, setFullName] = useState("");
  const [description, setDescriptions] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [team, setTeam] = useState("");
  const [progress, setProgress] = useState(0);
  const [startTime, setStartTime] = useState();
  const [dueTime, setDueTime] = useState();

  const createTask = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/task", {
        name: fullName,
        description: description,
        priority: priority,
        status: status,
        team: team,
        progress: progress,
        start: startTime,
        due: dueTime,
      });
      try {
        const users = await Axios.get("/user");
        const array = users.data;
        array.forEach(async (user, index) => {
          if (user.team === team) {
            try {
              const subResponse = await Axios.post("/timeline", {
                user: user._id,
                body: `You have been added as a member of the ${team} team to the Task: ${fullName}`,
                type: "Tasks",
              });
              await Notification("success", "Successufly adding the task");
              window.location.reload();
            } catch (err) {
              console.log(err);
              Notification(
                "error",
                "Something went wrong when adding the task"
              );
            }
          }
        });
      } catch (err) {
        console.error(err);
        Notification("error", "Something went wrong when adding the task");
      }
    } catch (err) {
      console.error(err);
      Notification("error", "Something went wrong when adding the task");
    }
  };

  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <NotificationContainer />
        <div className="cont">
          <Header title={"Add Task"} />
          <div>
            <ul className="nav nav-tabs page-header-tab ">
              <li className="nav-item">
                <a
                  style={
                    window.location.pathname === "/Taskboard"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  className={
                    window.location.pathname === "/Taskboard"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-toggle="tab"
                  href="/Taskboard"
                >
                  Taskboard
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    window.location.pathname === "/add-Task"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  style={
                    window.location.pathname === "/add-Task"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  data-toggle="tab"
                  href="/add-Task"
                >
                  Add Tasks
                </a>
              </li>
            </ul>
          </div>
          <div className="vh-600" style={{ backgroundColor: "white" }}>
            <div className="container-fluid ">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img src={banner} alt="login form" className="img-fluid" />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4">
                  <form onSubmit={createTask}>
                    <div className="text-center mb-3">
                      <h3 className="text-info">Add Tasks</h3>
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          onChange={(e) => setFullName(e.target.value)}
                        />
                        <label>Name</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <select
                          className="form-select"
                          onChange={(e) => setPriority(e.target.value)}
                        >
                          <option defaultValue>choose...</option>
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </select>
                        <label>Priority</label>
                      </div>
                    </div>

                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Description"
                        onChange={(e) => setDescriptions(e.target.value)}
                      ></textarea>
                      <label>Description</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        placeholder="Start Date"
                        type="date"
                        onChange={(e) => setStartTime(e.target.value)}
                      />
                      <label>Start Time</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        placeholder="Due Date"
                        type="date"
                        onChange={(e) => setDueTime(e.target.value)}
                      />
                      <label>Due Time</label>
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6 form-floating mb-3">
                        <select
                          className="form-select"
                          onChange={(e) => setTeam(e.target.value)}
                        >
                          <option selected>Choose...</option>
                          <option value="Team One">Team One</option>
                          <option value="Team Two">Team Two</option>
                          <option value="Team Three">Team Three</option>
                        </select>
                        <label>Team</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <select
                          className="form-select"
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option selected>Choose...</option>
                          <option value="UpComing">UpComing</option>
                          <option value="OnGoing">OnGoing</option>
                          <option value="Completed">Completed</option>
                        </select>
                        <label>Status</label>
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        type="Number"
                        step="1"
                        min="0"
                        onChange={(e) => setProgress(e.target.value)}
                      />
                      <label>Progress</label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-100 my-3"
                    >
                      Create Task
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default AddTask;
