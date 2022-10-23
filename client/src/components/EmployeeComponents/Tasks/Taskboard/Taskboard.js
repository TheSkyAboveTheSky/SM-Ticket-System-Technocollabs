import React, { useEffect, useState } from "react";
import Sidebar from "../../../SharedComponents/Sidebar/Sidebar";
import Header from "../../../SharedComponents/Header/Header";
import user from "../../../../assets/images/user.png";
import axios from "../../../SharedComponents/Axios/Axios";
import dateFormat from "dateformat";
import taskImg from '../../../../assets/images/Task.png';
import './Taskboard.css';

function Taskboard() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTasks();
  }, []);
  const getTasks = async () => {
    const response = await axios.get("/task",{headers : {'x-auth-token' : window.localStorage.getItem('x-auth-token')}});
    setTasks(response.data);
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
            </ul>
          </div>
          <div style={{ backgroundColor : 'white' }}>
            <img src={taskImg} alt="Taskboard" className="taskbg"/>
          </div>
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
