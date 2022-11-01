import React, { useEffect, useState } from "react";
import Sidebar from "../../../SharedComponents/Sidebar/Sidebar";
import Header from "../../../SharedComponents/Header/Header";
import axios from "../../../SharedComponents/Axios/Axios";
import dateFormat from "dateformat";
import taskImg from "../../../../assets/images/Task.png";
import "./Taskboard.css";
import { NotificationContainer } from "react-notifications";
import Notification from "../../../SharedComponents/Notification/Notification";
import Modal from "react-modal";
import banner from "../../../../assets/images/addTask.jpg";

function Taskboard() {
  const [tasks, setTasks] = useState([]);
  // Modal
  const [isOpen, setIsOpen] = useState(false);
  //
  const [fullName, setFullName] = useState("");
  const [description, setDescriptions] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [team, setTeam] = useState("");
  const [progress, setProgress] = useState(0);
  const [startTime, setStartTime] = useState();
  const [dueTime, setDueTime] = useState();
  //
  const [id, setId] = useState("");

  useEffect(() => {
    getTasks();
  }, []);
  const getTasks = async () => {
    const response = await axios.get("/task", {
      headers: { "x-auth-token": window.localStorage.getItem("x-auth-token") },
    });
    setTasks(response.data);
  };
  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(`/task/${id}`, {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      });
      await Notification("success", "Successufly deleted the Task");
      window.location.reload();
    } catch (err) {
      Notification("error", err);
    }
  };
  const updateTask = async () => {
    try {
      const response = await axios.put(
        `/task/${id}`,
        {
          name: fullName,
          description: description,
          priority: priority,
          status: status,
          team: team,
          progress: progress,
          start: startTime,
          due: dueTime,
        },
        {
          headers: {
            "x-auth-token": window.localStorage.getItem("x-auth-token"),
          },
        }
      );
      try {
        const users = await axios.get("/user", {
          headers: {
            "x-auth-token": window.localStorage.getItem("x-auth-token"),
          },
        });
        const array = users.data;
        array.forEach(async (user, index) => {
          if (user.team === team) {
            try {
              const subResponse = await axios.post("/timeline", {
                user: user._id,
                body: `You have been added as a member of the ${team} team to the Task: ${fullName}`,
                type: "Tasks",
              });
              await Notification("success", "Successufly adding the task");
              closeModal();
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
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };
  const getTask = async (id) => {
    const response = await axios.get(`/task/${id}`, {
      headers: { "x-auth-token": window.localStorage.getItem("x-auth-token") },
    });
    setId(id);
    setDescriptions(response.data.description);
    setDueTime(response.data.due);
    setFullName(response.data.name);
    setPriority(response.data.priority);
    setProgress(response.data.progress);
    setStartTime(response.data.start);
    setTeam(response.data.team);
    setStatus(response.data.status);
    openModal();
  };
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <Header title={"Taskboard"} />
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
                      ? { borderTop: "3px solid blue" }
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
          <div style={{ backgroundColor: "white" }}>
            <img src={taskImg} alt="Taskboard" className="taskbg" />
          </div>
          <NotificationContainer />
          <div className="section-body">
            <div className="container-fluid">
              <div className="tab-content taskboard">
                <div
                  className="tab-pane fade show active"
                  id="TaskBoard-list"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="table-responsive">
                        <table className="table table-hover table-vcenter mb-0 table_custom spacing8 text-nowrap">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Task</th>
                              <th>Team</th>
                              <th>Duration</th>
                              <th>Action</th>
                              <th className="w200"></th>
                            </tr>
                          </thead>
                          <tbody>
                            {tasks.map((task, index) => {
                              let color;
                              switch (task.status) {
                                case "UpComing": {
                                  color = "tag-red tag";
                                  break;
                                }
                                case "Completed": {
                                  color = "tag-blue tag";
                                  break;
                                }
                                case "OnGoing": {
                                  color = "tag-green tag";
                                  break;
                                }
                              }

                              return (
                                <tr>
                                  <td>{++index}</td>
                                  <td>
                                    <h6 className="mb-0">{task.name}</h6>
                                    <span>{task.description}</span>
                                  </td>
                                  <td>{task.team}</td>
                                  <td>
                                    <div className="text-info">
                                      Start:{" "}
                                      {dateFormat(task.start, "dddd mm yyyy")}
                                    </div>
                                    <div className="text-pink">
                                      End:{" "}
                                      {dateFormat(task.due, "dddd  mm  yyyy")}
                                    </div>
                                  </td>
                                  <td>
                                    <span className={color}>{task.status}</span>
                                  </td>
                                  <td>
                                    <div className="clearfix">
                                      <div className="float-left">
                                        <strong>{task.progress}%</strong>
                                      </div>
                                      <div className="float-right">
                                        <small className="text-muted">
                                          Progress
                                        </small>
                                      </div>
                                    </div>
                                    <div className="progress progress-xs">
                                      <div
                                        className="progress-bar bg-azure"
                                        role="progressbar"
                                        style={{ width: `${task.progress}%` }}
                                        aria-valuenow={task.progress}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </td>
                                  <td>
                                    <a
                                      className="btn btn-sm"
                                      style={{
                                        color: "red",
                                        marginRight: "1rem",
                                      }}
                                      onClick={() => {
                                        deleteTask(task._id);
                                      }}
                                    >
                                      <i className="fa fa-trash"></i>
                                    </a>
                                    <a
                                      className="btn btn-sm"
                                      style={{ color: "blue" }}
                                      onClick={() => {
                                        getTask(task._id);
                                      }}
                                    >
                                      <i className="fa fa-pen-to-square"></i>
                                    </a>
                                  </td>
                                  <Modal
                                    isOpen={isOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Update Modal"
                                  >
                                    <div
                                      className="vh-600"
                                      style={{ backgroundColor: "white" }}
                                    >
                                      <div className="container-fluid ">
                                        <div className="row d-flex justify-content-center align-items-center h-100">
                                          <div className="col-md-9 col-lg-6 col-xl-5">
                                            <img
                                              src={banner}
                                              alt="login form"
                                              className="img-fluid"
                                            />
                                          </div>
                                          <div className="col-md-8 col-lg-6 col-xl-4">
                                            <form onSubmit={() => updateTask()}>
                                              <div className="text-center mb-3">
                                                <h3 className="text-info">
                                                  Update Tasks
                                                </h3>
                                              </div>
                                              <div className="row g-3">
                                                <div className="col-md-6 mb-3">
                                                  <label>Name :</label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    value={fullName}
                                                    placeholder="Name"
                                                    onChange={(e) =>
                                                      setFullName(
                                                        e.target.value
                                                      )
                                                    }
                                                  />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                  <label>Priority :</label>
                                                  <select
                                                    className="form-select"
                                                    value={priority}
                                                    onChange={(e) =>
                                                      setPriority(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    <option defaultValue>
                                                      choose...
                                                    </option>
                                                    <option value="Low">
                                                      Low
                                                    </option>
                                                    <option value="Medium">
                                                      Medium
                                                    </option>
                                                    <option value="High">
                                                      High
                                                    </option>
                                                  </select>
                                                </div>
                                              </div>

                                              <div className="mb-3">
                                                <label>Description :</label>
                                                <textarea
                                                  className="form-control"
                                                  placeholder="Description"
                                                  value={description}
                                                  onChange={(e) =>
                                                    setDescriptions(
                                                      e.target.value
                                                    )
                                                  }
                                                ></textarea>
                                              </div>
                                              <div className="mb-3">
                                                <label>
                                                  Start Time :
                                                  {" Format : YYYY-MM-DD "}
                                                </label>
                                                <input
                                                  className="form-control"
                                                  value={startTime}
                                                  placeholder="Start Date"
                                                  type="date"
                                                  onChange={(e) =>
                                                    setStartTime(e.target.value)
                                                  }
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <label>
                                                  Due Time :
                                                  {" Format : YYYY-MM-DD "}
                                                </label>
                                                <input
                                                  className="form-control"
                                                  placeholder="Due Date"
                                                  value={dueTime}
                                                  type="date"
                                                  onChange={(e) =>
                                                    setDueTime(e.target.value)
                                                  }
                                                />
                                              </div>
                                              <div className="row g-3">
                                                <div className="col-md-6 mb-3">
                                                  <label>Team :</label>
                                                  <select
                                                    className="form-select"
                                                    value={team}
                                                    onChange={(e) =>
                                                      setTeam(e.target.value)
                                                    }
                                                  >
                                                    <option selected>
                                                      Choose...
                                                    </option>
                                                    <option value="Team One">
                                                      Team One
                                                    </option>
                                                    <option value="Team Two">
                                                      Team Two
                                                    </option>
                                                    <option value="Team Three">
                                                      Team Three
                                                    </option>
                                                  </select>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                  <label>Status :</label>
                                                  <select
                                                    className="form-select"
                                                    onChange={(e) =>
                                                      setStatus(e.target.value)
                                                    }
                                                  >
                                                    <option selected>
                                                      Choose...
                                                    </option>
                                                    <option value="UpComing">
                                                      UpComing
                                                    </option>
                                                    <option value="OnGoing">
                                                      OnGoing
                                                    </option>
                                                    <option value="Completed">
                                                      Completed
                                                    </option>
                                                  </select>
                                                </div>
                                              </div>
                                              <div className="mb-3">
                                                <label>Progress :</label>
                                                <input
                                                  className="form-control"
                                                  type="Number"
                                                  step="1"
                                                  min="0"
                                                  value={progress}
                                                  onChange={(e) =>
                                                    setProgress(e.target.value)
                                                  }
                                                />
                                              </div>

                                              <button
                                                type="submit"
                                                className="btn btn-primary w-40 my-3 mx-1"
                                              >
                                                Update Task
                                              </button>
                                              <button
                                                className="btn btn-primary w-40 my-3"
                                                onClick={closeModal}
                                              >
                                                Close
                                              </button>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Modal>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Taskboard;
