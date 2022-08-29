import React, { useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import Axios from "../../Axios/Axios";
import banner from "../../../assets/images/banner.jpg";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Notification from '../../Notification/Notification';


function AddTicket() {
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [agent, setAgent] = useState("");
  const [username, setUsername] = useState("");
  const [product, setProduct] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState();
  const [priority, setPriority] = useState("");
  const [departement, setDepartement] = useState("");

  const createTicket = async () => {
    try {
      const response = await Axios.post("/ticket", {
        id: id,
        title: title,
        agent: agent,
        details: details,
        userName: username,
        Product: product,
        departement: departement,
        date: date,
        Priority: priority,
      });
      await Notification("success","Successufly adding the Ticket");
    } catch (err) {
      console.error(err);
      Notification("error","Something went wrong while adding the ticket");
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
                  <img src={banner} alt="login form" className="img-fluid" />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4">
                  <form onSubmit={createTicket}>
                    <div className="text-center mb-3">
                      <h3 classname="text-info">Add Tickets</h3>
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="ID"
                          onChange={(e) => setID(e.target.value)}
                        />
                        <label>ID</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Title"
                          onChange={(e) => setTitle(e.target.value)}
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
                          onChange={(e) => setAgent(e.target.value)}
                        />
                        <label>Agent</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          onChange={(e) => setUsername(e.target.value)}
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
                          onChange={(e) => setProduct(e.target.value)}
                        />
                        <label>Product</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Departement"
                          onChange={(e) => setDepartement(e.target.value)}
                        />
                        <label>Departement</label>
                      </div>
                    </div>

                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Details"
                        onChange={(e) => setDetails(e.target.value)}
                      ></textarea>
                      <label>Details</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        placeholder="Date"
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                      />
                      <label>Date</label>
                    </div>
                    <div className="form-floating mb-3">
                      <select
                        className="form-select"
                        onChange={(e) => setPriority(e.target.value)}
                      >
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
