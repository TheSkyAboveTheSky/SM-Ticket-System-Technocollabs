import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import banner from "../../../assets/images/addTask.jpg";

function AddTask() {
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
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
                  <form>
                    <div className="text-center mb-3">
                      <h3 classname="text-info">Add Tasks</h3>
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Title"
                        />
                        <label>Name</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <select className="form-select">
                          <option selected>Choose...</option>
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
                      ></textarea>
                      <label>Description</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        placeholder="Start Date"
                        type="date" 
                      />
                      <label>Start Time</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        placeholder="Due Date"
                        type="date" 
                      />
                      <label>Due Time</label>
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6 form-floating mb-3">
                        <select className="form-select">
                          <option selected>Choose...</option>
                          <option value="Team One">Team One</option>
                          <option value="Team Two">Team Two</option>
                          <option value="Team Three">Team Three</option>
                        </select>
                        <label>Team</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <select className="form-select">
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
