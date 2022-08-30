import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import register from "../../../assets/images/register.webp";
import Axios from "../../Axios/Axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Notification from "../../Notification/Notification";

function AddProject() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [creator, setCreator] = useState("");
  const [team, setTeam] = useState("");
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState("");

  const createProject = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "/project",
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
      try {
        const users = await Axios.get("/user", {
          headers: {
            "x-auth-token": window.localStorage.getItem("x-auth-token"),
          },
        });
        const array = users.data;
        array.forEach(async (user, index) => {
          if (user.team === team) {
            try {
              const subResponse = await Axios.post(
                "/timeline",
                {
                  user: user._id,
                  body: `You have been added as a member of the ${team} team to the Project : ${title}`,
                  type: "Tasks",
                },
                {
                  headers: {
                    "x-auth-token": window.localStorage.getItem("x-auth-token"),
                  },
                }
              );
              await Notification("success", "Successufly adding the Project");
              window.location.reload();
            } catch (err) {
              console.log(err);
              Notification(
                "error",
                "Something went wrong when adding the project"
              );
            }
          }
        });
      } catch (err) {
        console.error(err);
        Notification("error", "Something went wrong when adding the project");
      }
    } catch (err) {
      console.error(err);
      Notification("error", "Something went wrong when adding the project");
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
          <Header title={"Add Projects"} />
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
          <div className="vh-600" style={{ backgroundColor: "white" }}>
            <div className="container-fluid ">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img src={register} alt="login form" className="img-fluid" />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4">
                  <form onSubmit={createProject}>
                    <div className="text-center mb-3">
                      <h3 classname="text-info">Add Projects</h3>
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Title"
                          onChange={(e) => setTitle(e.target.value)}
                        />
                        <label>Title</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <select
                          className="form-select"
                          onChange={(e) => setType(e.target.value)}
                        >
                          <option selected>Choose...</option>
                          <option value="Angular">Angular</option>
                          <option value="React">React</option>
                          <option value="Web Design">Web Design</option>
                          <option value="Mobile Development">
                            Mobile Development
                          </option>
                          <option value="IOS App">IOS App</option>
                          <option value="Android">Android</option>
                          <option value="Wordpress">Wordpress</option>
                        </select>
                        <label>Type</label>
                      </div>
                    </div>

                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                      <label>Description</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        placeholder="Creator"
                        type="text"
                        onChange={(e) => setCreator(e.target.value)}
                      />
                      <label>Creator</label>
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
                      Create Project
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

export default AddProject;
