import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";

function AddTicket() {
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <Header title={"Add Ticket"} />
          <div>
            <ul className="nav nav-tabs page-header-tab ">
              <li className="nav-item">
                <a
                  style={
                    window.location.pathname === "/Ticket-List"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  className={
                    window.location.pathname === "/Ticket-List"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-toggle="tab"
                  href="/Ticket-List"
                >
                  Ticket List
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    window.location.pathname === "/add-Ticket"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  style={
                    window.location.pathname === "/add-Ticket"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  data-toggle="tab"
                  href="/add-Ticket"
                >
                  Add Ticket
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
                      <h3 classname="text-info">Add Tickets</h3>
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ID"
                        />
                        <label>ID</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Title"
                        />
                        <label>Title</label>
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Agent"
                        />
                        <label>Agent</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                        />
                        <label>Username</label>
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Product"
                        />
                        <label>Product</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Departement"
                        />
                        <label>Departement</label>
                      </div>
                    </div>

                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Details"
                      ></textarea>
                      <label>Details</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        placeholder="Date"
                        type="date"
                      />
                      <label>Date</label>
                    </div>
                    <div className="form-floating mb-3">
                      <select className="form-select">
                        <option selected>Choose...</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                      <label>Priority</label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 my-3"
                    >
                      Create Ticket
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

export default AddTicket;
