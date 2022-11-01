import React, { useEffect, useState } from "react";
import Sidebar from "../../../SharedComponents/Sidebar/Sidebar";
import Header from "../../../SharedComponents/Header/Header";
import axios from "../../../SharedComponents/Axios/Axios";
import dateFormat from "dateformat";
import { NotificationContainer } from "react-notifications";
import Notification from "../../../SharedComponents/Notification/Notification";
import Modal from "react-modal";
import register from "../../../../assets/images/register.webp";

function UpComingProject() {
  //
  const [projects, setProjects] = useState([]);
  //Modal
  const [isOpen, setIsOpen] = useState(false);
  //
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [creator, setCreator] = useState("");
  const [team, setTeam] = useState("");
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState("");
  // ID
  const [id, setId] = useState("");
  useEffect(() => {
    getProjects();
  }, []);
  const getProjects = async () => {
    const response = await axios.get("/project/upcoming", {
      headers: { "x-auth-token": window.localStorage.getItem("x-auth-token") },
    });
    setProjects(response.data);
  };
  const getProject = async (id) => {
    const response = await axios.get(`/project/${id}`, {
      headers: { "x-auth-token": window.localStorage.getItem("x-auth-token") },
    });
    setTitle(response.data.title);
    setType(response.data.type);
    setDescription(response.data.description);
    setCreator(response.data.creator);
    setTeam(response.data.team);
    setStatus(response.data.status);
    setProgress(response.data.progress);
    setId(id);
    openModal();
  };
  const updateProject = async () => {
    const response = await axios.put(
      `/project/${id}`,
      {
        title: title,
        type: type,
        description: description,
        creator: creator,
        team: team,
        status: status,
        progress: progress,
      },
      {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      }
    );
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
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <NotificationContainer />
        <div className="cont">
          <Header title={"UpComing Projects"} />
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
                      let styleTag;
                      switch (project.type) {
                        case "Angular":
                          styleTag = "tag tag-pink mb-3";
                          break;
                        case "Web Design":
                          styleTag = "tag tag-blue mb-3";
                          break;
                        case "React":
                          styleTag = "tag tag-blue mb-3";
                          break;
                        case "IOS App":
                          styleTag = "tag tag-black mb-3";
                          break;
                        case "Android":
                          styleTag = "tag tag-orange mb-3";
                          break;
                        case "Mobile Development":
                          styleTag = "tag tag-pink mb-3";
                          break;
                        case "Wordpress":
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
                                  className="card-options-collapse"
                                  onClick={() => {
                                    deleteProject(project._id);
                                  }}
                                >
                                  <i
                                    className="fa fa-trash"
                                    style={{ color: "red", cursor: "pointer" }}
                                  ></i>
                                </a>
                                <a
                                  className="card-options-collapse"
                                  onClick={() => getProject(project._id)}
                                >
                                  <i
                                    className="fa fa-pen-to-square"
                                    style={{ color: "blue", cursor: "pointer" }}
                                  ></i>
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <span className={styleTag}>{project.type}</span>
                              <p>{project.description}</p>
                              <div className="row">
                                <div className="col-5 py-1">
                                  <strong>Created:</strong>
                                </div>
                                <div className="col-7 py-1">
                                  {dateFormat(
                                    project.createdAt,
                                    "mmmm dd-yyyy | HH:mm:ss"
                                  )}
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
                                <div className="col-7 py-1">{project.team}</div>
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
                                  className="progress-bar bg-blue"
                                  role="progressbar"
                                  style={{ width: `${project.progress}%` }}
                                  aria-valuenow="36"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
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
                                          src={register}
                                          alt="login form"
                                          className="img-fluid"
                                        />
                                      </div>
                                      <div className="col-md-8 col-lg-6 col-xl-4">
                                        <form onSubmit={updateProject}>
                                          <div className="text-center mb-3">
                                            <h3 className="text-info">
                                              Update Project
                                            </h3>
                                          </div>
                                          <div className="row g-3">
                                            <div className="col-md-6 mb-3">
                                              <label>Title</label>
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Title"
                                                value={title}
                                                onChange={(e) =>
                                                  setTitle(e.target.value)
                                                }
                                              />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                              <label>Type</label>
                                              <select
                                                className="form-select"
                                                value={type}
                                                onChange={(e) =>
                                                  setType(e.target.value)
                                                }
                                              >
                                                <option selected>
                                                  Choose...
                                                </option>
                                                <option value="Angular">
                                                  Angular
                                                </option>
                                                <option value="React">
                                                  React
                                                </option>
                                                <option value="Web Design">
                                                  Web Design
                                                </option>
                                                <option value="Mobile Development">
                                                  Mobile Development
                                                </option>
                                                <option value="IOS App">
                                                  IOS App
                                                </option>
                                                <option value="Android">
                                                  Android
                                                </option>
                                                <option value="Wordpress">
                                                  Wordpress
                                                </option>
                                              </select>
                                            </div>
                                          </div>

                                          <div className="mb-3">
                                            <label>Description</label>
                                            <textarea
                                              className="form-control"
                                              placeholder="Description"
                                              value={description}
                                              onChange={(e) =>
                                                setDescription(e.target.value)
                                              }
                                            ></textarea>
                                          </div>
                                          <div className="mb-3">
                                            <label>Creator</label>
                                            <input
                                              className="form-control"
                                              placeholder="Creator"
                                              value={creator}
                                              type="text"
                                              onChange={(e) =>
                                                setCreator(e.target.value)
                                              }
                                            />
                                          </div>
                                          <div className="row g-3">
                                            <div className="col-md-6 mb-3">
                                              <label>Team</label>
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
                                              <label>Status</label>
                                              <select
                                                className="form-select"
                                                value={status}
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
                                            <label>Progress</label>
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
                                            Update Project
                                          </button>
                                          <button
                                            className="btn btn-danger w-40 my-3"
                                            onClick={() => closeModal()}
                                          >
                                            Close
                                          </button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Modal>
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

export default UpComingProject;
