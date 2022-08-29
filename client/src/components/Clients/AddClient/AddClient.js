import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";

function AddClient() {
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <Header title={"Add Client"} />
          <div>
            <ul className="nav nav-tabs page-header-tab ">
              <li className="nav-item">
                <a
                  style={
                    window.location.pathname === "/Client-List"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  className={
                    window.location.pathname === "/client-List"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-toggle="tab"
                  href="/Client-List"
                >
                  Client List
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    window.location.pathname === "/add-Client"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  style={
                    window.location.pathname === "/add-Client"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  data-toggle="tab"
                  href="/add-Client"
                >
                  Add Client
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
                      <h3 classname="text-info">Add Clients</h3>
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="FullName"
                        />
                        <label>Full Name</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Country"
                        />
                        <label>Country</label>
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                        />
                        <label>Address</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                        <label>Email</label>
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="Number"
                          className="form-control"
                          placeholder="Projects"
                          min="0"
                          step="1"
                        />
                        <label>Project</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="Number"
                          className="form-control"
                          placeholder="Deal"
                          min="0"
                          step="1"
                        />
                        <label>Deal</label>
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Facebook"
                        />
                        <label>Facebook</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Instagram"
                        />
                        <label>Instagram</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Twitter"
                        />
                        <label>Twitter</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Slack"
                        />
                        <label>Slack</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Github"
                        />
                        <label>Github</label>
                      </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 my-3"
                    >
                      Create Client
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

export default AddClient;
