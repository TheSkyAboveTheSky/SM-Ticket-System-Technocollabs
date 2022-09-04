import React, { useEffect, useState } from "react";
import Sidebar from "../../../SharedComponents/Sidebar/Sidebar";
import Header from "../../../SharedComponents/Header/Header";
import Axios from "../../../SharedComponents/Axios/Axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Notification from '../../../SharedComponents/Notification/Notification';

function TicketList() {
  const [ticketList, setTicketList] = useState([]);
  useEffect(() => {
    getTickets();
  }, []);
  const getTickets = async () => {
    const response = await Axios.get("/ticket",{headers : {'x-auth-token' : window.localStorage.getItem('x-auth-token')}});
    const ticketList = response.data;
    setTicketList(ticketList);
  };
  const deleteTicket = async (id) => {
    try{
      const response = await Axios.delete(`/ticket/${id}`,{headers : {'x-auth-token' : window.localStorage.getItem('x-auth-token')}});
      Notification("success","Successufly deleting the ticket");
      window.location.reload();
    }catch(err){
      Notification("error",err.message);
    }
  }
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
                            <th>Action</th>
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
                                  <a href={`/Ticket-details/${ticket._id}`} className="tag tag-blue">
                                    {ticket.id}
                                  </a>
                                </td>
                                <td>
                                  <span>
                                    {ticket.title}
                                  </span>
                                </td>
                                <td>
                                  <span className={tagStyle}>{ticket.Priority}</span>
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
                                <td>{ticket.numberOfReplies ? `${ticket.numberOfReplies} reply` :  "No reply yet"}</td>
                                <td>
                                  <a className="btn btn-sm" style={{color:'red'}} onClick={() => {
                                    deleteTicket(ticket._id);
                                  }}>
                                    <i className="fa fa-trash"></i>
                                  </a>
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
      </>
    </div>
  );
}

export default TicketList;
