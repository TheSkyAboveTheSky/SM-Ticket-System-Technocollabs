import React, { useEffect, useState } from "react";
import Sidebar from "../../../SharedComponents/Sidebar/Sidebar";
import Header from "../../../SharedComponents/Header/Header";
import Axios from "../../../SharedComponents/Axios/Axios";
import banner from "../../../../assets/images/banner.jpg";
import { NotificationContainer } from "react-notifications";
import Notification from "../../../SharedComponents/Notification/Notification";
import Modal from "react-modal";

function TicketList() {
  const [ticketList, setTicketList] = useState([]);
  // Modal
  const [isOpen, setIsOpen] = useState(false);
  //
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [agent, setAgent] = useState("");
  const [username, setUsername] = useState("");
  const [product, setProduct] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState();
  const [priority, setPriority] = useState("");
  const [departement, setDepartement] = useState("");
  const [progress, setProgress] = useState(0);
  const [idt, setIdT] = useState("");

  useEffect(() => {
    getTickets();
  }, []);
  const getTickets = async () => {
    const response = await Axios.get("/ticket", {
      headers: { "x-auth-token": window.localStorage.getItem("x-auth-token") },
    });
    const ticketList = response.data;
    setTicketList(ticketList);
  };
  const deleteTicket = async (id) => {
    try {
      const response = await Axios.delete(`/ticket/${id}`, {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      });
      Notification("success", "Successufly deleting the ticket");
      window.location.reload();
    } catch (err) {
      Notification("error", err.message);
    }
  };
  const updateTicket = async () => {
    try {
      const response = await Axios.put(
        `/ticket/${idt}`,
        {
          id: id,
          title: title,
          agent: agent,
          details: details,
          userName: username,
          Product: product,
          departement: departement,
          date: date,
          Priority: priority,
          progress: progress,
        },
        {
          headers: {
            "x-auth-token": window.localStorage.getItem("x-auth-token"),
          },
        }
      );
      await Notification("success", "Successufly Updating The Ticket");
    } catch (err) {
      await Notification("error", err.message);
    }
  };
  const getTicket = async (id) => {
    const response = await Axios.get(`/ticket/${id}`, {
      headers: {
        "x-auth-token": window.localStorage.getItem("x-auth-token"),
      },
    });
    setIdT(id);
    setAgent(response.data.agent);
    setDate(response.data.date);
    setDepartement(response.data.departement);
    setPriority(response.data.Priority);
    setProduct(response.data.Product);
    setDetails(response.data.details);
    setID(response.data.id);
    setUsername(response.data.userName);
    setTitle(response.data.title);
    openModal();
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
        <div className="cont">
          <Header title={"Ticket List"} />
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
          <NotificationContainer />
          <div className="section-body mt-3">
            <div className="container-fluid">
              <div className="row clearfix">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="id"
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Priority"
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Department"
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Agent"
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              data-provide="datepicker"
                              placeholder="Date"
                            />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                          <a
                            href="javascript:void(0);"
                            className="btn btn-primary btn-block"
                            title=""
                          >
                            Search
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="card">
                    <div className="table-responsive">
                      <table className="table table-hover table-striped table-vcenter mb-0 text-nowrap">
                        <thead>
                          <tr>
                            <th colspan="5">Ticket Detail</th>
                            <th colspan="3">Activity</th>
                          </tr>
                          <tr>
                            <th className="w30"></th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Priority</th>
                            <th>Department</th>
                            <th>Agent</th>
                            <th>Date</th>
                            <th>Activity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ticketList.map((ticket) => {
                            let tagStyle;
                            switch (ticket.Priority) {
                              case "Low": {
                                tagStyle = "tag tag-default";
                                break;
                              }
                              case "Medium": {
                                tagStyle = "tag tag-info";
                                break;
                              }
                              case "High": {
                                tagStyle = "tag tag-danger";
                                break;
                              }
                            }
                            return (
                              <tr>
                                <td>
                                  <label className="custom-control custom-checkbox">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                    />
                                    <span className="custom-control-label">
                                      &nbsp;
                                    </span>
                                  </label>
                                </td>
                                <td>
                                  <a
                                    href={`/Ticket-details/${ticket._id}`}
                                    className="tag tag-blue"
                                  >
                                    {ticket.id}
                                  </a>
                                </td>
                                <td>
                                  <span>{ticket.title}</span>
                                </td>
                                <td>
                                  <span className={tagStyle}>
                                    {ticket.Priority}
                                  </span>
                                </td>
                                <td>
                                  <span>{ticket.departement}</span>
                                </td>
                                <td>
                                  <span>{ticket.agent}</span>
                                </td>
                                <td>
                                  <span>{ticket.date}</span>
                                </td>
                                <td>
                                  {ticket.numberOfReplies
                                    ? `${ticket.numberOfReplies} reply`
                                    : "No reply yet"}
                                </td>
                                <td>
                                  <a
                                    className="btn btn-sm"
                                    style={{ color: "red" }}
                                    onClick={() => {
                                      deleteTicket(ticket._id);
                                    }}
                                  >
                                    <i className="fa fa-trash"></i>
                                  </a>
                                  <a
                                    className="btn btn-sm"
                                    style={{ color: "blue" }}
                                    onClick={() => {
                                      getTicket(ticket._id);
                                    }}
                                  >
                                    <i className="fa fa-pen-to-square"></i>
                                  </a>
                                </td>
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
                                            src={banner}
                                            alt="login form"
                                            className="img-fluid"
                                          />
                                        </div>
                                        <div className="col-md-8 col-lg-6 col-xl-4">
                                          <form onSubmit={updateTicket}>
                                            <div className="text-center mb-3">
                                              <h3 className="text-info">
                                                Add Tickets
                                              </h3>
                                            </div>
                                            <div className="row g-3">
                                              <div className="col-md-6 mb-3">
                                                <label>ID</label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="ID"
                                                  value={id}
                                                  onChange={(e) =>
                                                    setID(e.target.value)
                                                  }
                                                />
                                              </div>
                                              <div className="col-md-6 mb-3">
                                                <label>Title</label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={title}
                                                  placeholder="Title"
                                                  onChange={(e) =>
                                                    setTitle(e.target.value)
                                                  }
                                                />
                                              </div>
                                            </div>
                                            <div className="row g-3">
                                              <div className="col-md-6 mb-3">
                                                <label>Agent</label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Agent"
                                                  value={agent}
                                                  onChange={(e) =>
                                                    setAgent(e.target.value)
                                                  }
                                                />
                                              </div>
                                              <div className="col-md-6 mb-3">
                                                <label>Username</label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Username"
                                                  value={username}
                                                  onChange={(e) =>
                                                    setUsername(e.target.value)
                                                  }
                                                />
                                              </div>
                                            </div>
                                            <div className="row g-3">
                                              <div className="col-md-6 mb-3">
                                                <label>Product</label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Product"
                                                  value={product}
                                                  onChange={(e) =>
                                                    setProduct(e.target.value)
                                                  }
                                                />
                                              </div>
                                              <div className="col-md-6 mb-3">
                                                <label>Departement</label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  placeholder="Departement"
                                                  value={departement}
                                                  onChange={(e) =>
                                                    setDepartement(
                                                      e.target.value
                                                    )
                                                  }
                                                />
                                              </div>
                                            </div>

                                            <div className="mb-3">
                                              <label>Details</label>
                                              <textarea
                                                className="form-control"
                                                placeholder="Details"
                                                value={details}
                                                onChange={(e) =>
                                                  setDetails(e.target.value)
                                                }
                                              ></textarea>
                                            </div>
                                            <div className="mb-3">
                                              <label>Date</label>
                                              <input
                                                className="form-control"
                                                placeholder="Date"
                                                type="date"
                                                value={date}
                                                onChange={(e) =>
                                                  setDate(e.target.value)
                                                }
                                              />
                                            </div>
                                            <div className="mb-3">
                                              <label>Priority</label>
                                              <select
                                                className="form-select"
                                                value={priority}
                                                onChange={(e) =>
                                                  setPriority(e.target.value)
                                                }
                                              >
                                                <option selected>
                                                  Choose...
                                                </option>
                                                <option value="Low">Low</option>
                                                <option value="Medium">
                                                  Medium
                                                </option>
                                                <option value="High">
                                                  High
                                                </option>
                                              </select>
                                            </div>
                                            <div className="mb-3">
                                              <label>Progress</label>
                                              <input
                                                className="form-control"
                                                type="Number"
                                                step="1"
                                                min="0"
                                                max="100"
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
                                              Create Ticket
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
      </>
    </div>
  );
}

export default TicketList;
