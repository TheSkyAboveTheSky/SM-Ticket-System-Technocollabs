import React, { useEffect, useState } from "react";
import Sidebar from "../../../SharedComponents/Sidebar/Sidebar";
import Header from "../../../SharedComponents/Header/Header";
import user from "../../../../assets/images/user.png";
import axios from "../../../SharedComponents/Axios/Axios";
import dateFormat from "dateformat";
import taskImg from '../../../../assets/images/Task.jpg';
import './Taskboard.css';
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Notification from '../../../SharedComponents/Notification/Notification';

function Taskboard() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasks();
  }, []);
  const getTasks = async () => {
    const response = await axios.get("/task",{headers : {'x-auth-token' : window.localStorage.getItem('x-auth-token')}});
    setTasks(response.data);
  };
  const deleteTask = async (id) => {
    try{
      const response = await axios.delete(`/task/${id}`,{headers : {'x-auth-token' : window.localStorage.getItem('x-auth-token')}});
      await Notification("success","Successufly deleted the Task");
      window.location.reload();
    }catch(err){
      Notification("error", err);
    }
  }
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
          <div style={{ backgroundColor : 'white' }}>
            <img src={taskImg} alt="Taskboard" className="taskbg"/>
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
                              <th>Status</th>
                              <th className="w200">Progress</th>
                              <th>Action</th>
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
                                    <a className="btn btn-sm" style={{color:"red"}} onClick={() => {
                                      deleteTask(task._id);
                                    }}>
                                      <i className="fa fa-trash"></i>
                                    </a>
                                  </td>
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
