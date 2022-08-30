import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import "./TimelineTasks.css";
import Axios from "../../Axios/Axios";
import banner from "../../../assets/images/TimelineTask.jpg";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

function TimelineTasks() {
  const [timelines, setTimelines] = useState([]);
  const [id, setId] = useState(window.localStorage.getItem("user-id"));
  useEffect(() => {
    getTimelines();
  }, []);
  const getTimelines = async () => {
    const response = await Axios.get(`/timeline/${id}/tasks`,{headers : {'x-auth-token' : window.localStorage.getItem('x-auth-token')}});
    setTimelines(response.data);
  };

  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <Header title={"Timeline Tasks"} />
          <div>
            <ul className="nav nav-tabs page-header-tab ">
              <li className="nav-item">
                <a
                  style={
                    window.location.pathname === "/Timeline-Logs"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  className={
                    window.location.pathname === "/Timeline-Logs"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-toggle="tab"
                  href="/Timeline-Logs"
                >
                  Timeline Logs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    window.location.pathname === "/Timeline-Task"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  style={
                    window.location.pathname === "/Timeline-Task"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  data-toggle="tab"
                  href="/Timeline-Task"
                >
                  Timeline Tasks
                </a>
              </li>
            </ul>
          </div>
          <h1>Timeline Tasks</h1>
          <div style={{ backgroundColor: "white" }}>
            <img src={banner} alt="Taskboard" className="taskbg" />
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
                              <th>Action</th>
                              <th className="w-200">Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            {timelines.map((timeline, index) => {
                              TimeAgo.addDefaultLocale(en);
                              const timeAgo = new TimeAgo("en-US");
                              return (
                                <tr>
                                  <td>{++index}</td>
                                  <td>
                                    <h6 className="mb-0">
                                      <span className="tag tag-blue px-4">
                                        New Activity
                                      </span>
                                    </h6>
                                    <span>{timeline.body}</span>
                                  </td>
                                  <td></td>
                                  <td>
                                    <div className="text-info">
                                      {timeAgo.format(
                                        new Date(timeline.createdAt)
                                      )}
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

export default TimelineTasks;
