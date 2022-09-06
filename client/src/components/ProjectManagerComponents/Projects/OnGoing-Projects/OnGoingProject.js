import React, { useEffect, useState } from "react";
import Sidebar from "../../../SharedComponents/Sidebar/Sidebar";
import Header from "../../../SharedComponents/Header/Header";
import register from "../../../../assets/images/register.webp";
import axios from "../../../SharedComponents/Axios/Axios";
import dateFormat from 'dateformat';
import {
  NotificationContainer,
} from "react-notifications";
import Notification from "../../../SharedComponents/Notification/Notification";

function OnGoingProject() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    getProjects();
  }, []);
  const getProjects = async () => {
    const response = await axios.get("/project/ongoing",{headers : {'x-auth-token' : window.localStorage.getItem('x-auth-token')}});
    setProjects(response.data);
  };
  const deleteProject = async (id) => {
    try {
      const response = await axios.delete(`/project/${id}`, {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      });
      await Notification("success", "Successufly deleting the project");
      window.location.reload();
    } catch (err) {
      await Notification("error", err.message);
    }
  };
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <NotificationContainer />
          <Header title={"OnGoing Projects"} />
          <div>
            <ul className="nav nav-tabs page-header-tab ">
              <li className="nav-item">
                <a
                  style={
                    window.location.pathname === "/ongoing-Project"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  className={
                    window.location.pathname === "/ongoing-Project"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-toggle="tab"
                  href="/ongoing-Project"
                >
                  OnGoing Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    window.location.pathname === "/upcoming-Project"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  style={
                    window.location.pathname === "/upcoming-Project"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  data-toggle="tab"
                  href="/upcoming-Project"
                >
                  UpComing Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={
                    window.location.pathname === "/completed-Project"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  className={
                    window.location.pathname === "/completed-Project"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-toggle="tab"
                  href="/completed-Project"
                >
                  Completed Project
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={
                    window.location.pathname === "/add-Project"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  className={
                    window.location.pathname === "/add-Project"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-toggle="tab"
                  href="/add-Project"
                >
                  Add Project
                </a>
              </li>
            </ul>
          </div>
          <div className="section-body mt-3">
            <div className="container-fluid">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="Project-OnGoing"
                  role="tabpanel"
                >
                  <div className="row">
                    {projects.map((project) => {
                      let styleTag ;
                      switch(project.type)
                      {
                        case "Angular" :
                          styleTag = "tag tag-pink mb-3";
                          break;
                        case "Web Design" : 
                          styleTag = "tag tag-blue mb-3";
                          break;
                        case "React" :
                          styleTag = "tag tag-blue mb-3";
                          break;
                        case "IOS App" :
                          styleTag = "tag tag-black mb-3";
                          break;
                        case "Android" :
                          styleTag = "tag tag-orange mb-3";
                          break;
                        case "Mobile Development" :
                          styleTag = "tag tag-pink mb-3";
                          break;
                        case "Wordpress" :
                          styleTag = "tag tag-blue mb-3";
                          break;
                      }
                      return (
                        <div className="col-lg-6 col-md-12">
                          <div className="card">
                            <div className="card-header">
                              <h3 className="card-title">{project.title}</h3>
                              <div className="card-options">
                                <label className="custom-switch m-0">
                                  <input
                                    type="checkbox"
                                    value="1"
                                    className="custom-switch-input"
                                  />
                                  <span className="custom-switch-indicator"></span>
                                </label>
                                <a
                                  href="#"
                                  className="card-options-collapse"
                                  data-toggle="card-collapse"
                                  onClick={() => { deleteProject(project._id)}}
                                >
                                  <i
                                    className="fa fa-trash"
                                    style={{ color: "red" }}
                                  ></i>
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <span className={styleTag}>
                                {project.type}
                              </span>
                              <p>
                                {
                                  project.description
                                }
                              </p>
                              <div className="row">
                                <div className="col-5 py-1">
                                  <strong>Created:</strong>
                                </div>
                                <div className="col-7 py-1">
                                  {dateFormat(project.createdAt,"dddd MM yyyy")}
                                </div>
                                <div className="col-5 py-1">
                                  <strong>Creator:</strong>
                                </div>
                                <div className="col-7 py-1">
                                  {project.creator}
                                </div>
                                <div className="col-5 py-1">
                                  <strong>Question:</strong>
                                </div>
                                <div className="col-7 py-1">
                                  <strong>{project.questions}</strong>
                                </div>
                                <div className="col-5 py-1">
                                  <strong>Comments:</strong>
                                </div>
                                <div className="col-7 py-1">
                                  <strong>{project.comments}</strong>
                                </div>
                                <div className="col-5 py-1">
                                  <strong>Bug:</strong>
                                </div>
                                <div className="col-7 py-1">
                                  <strong>{project.bugs}</strong>
                                </div>
                                <div className="col-5 py-1">
                                  <strong>Team:</strong>
                                </div>
                                <div className="col-7 py-1">
                                  {project.team}
                                </div>
                              </div>
                            </div>
                            <div className="card-footer">
                              <div className="clearfix">
                                <div className="float-left">
                                  <strong>{project.progress}%</strong>
                                </div>
                                <div className="float-right">
                                  <small className="text-muted">Progress</small>
                                </div>
                              </div>
                              <div className="progress progress-xs">
                                <div
                                  className="progress-bar bg-green"
                                  role="progressbar"
                                  style={{ width: `${project.progress}%` }}
                                  aria-valuenow="36"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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

export default OnGoingProject;
