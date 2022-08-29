import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

function Test() {
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <Header title={"Test"} />
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
                  <img src="" alt="login form" className="img-fluid" />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4">
                  <form>
                    <div className="text-center mb-3">
                      <h3 classname="text-info">Sign Up</h3>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="FullName"
                      />
                      <label>Full Name</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                      />
                      <label>Username</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                      <label>Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                      <label>Password</label>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Repeat Password"
                      />
                      <label>Repeat Password</label>
                    </div>

                    <div className="col-md-12 d-flex justify-content-center">
                      <div className="form-check mb-3 mb-md-0">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                          {" "}
                          I have Already Read and Agreed to the Terms{" "}
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-100 my-3"
                    >
                      Sign Up
                    </button>
                    <div className="text-center">
                      <p>
                        Already a member?{" "}
                        <a href="/login" style={{ textDecoration: "none" }}>
                          Login in
                        </a>
                      </p>
                    </div>
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

export default Test;
