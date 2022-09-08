import React, { useEffect, useState } from "react";
import Sidebar from "../../../SharedComponents/Sidebar/Sidebar";
import Header from "../../../SharedComponents/Header/Header";
import Axios from "../../../SharedComponents/Axios/Axios";
import user from "../../../../assets/images/user.png";
import { useParams } from "react-router-dom";
import dateFormat from "dateformat";

function TicketDetails() {
  const [ticket, setTicket] = useState("");
  const [replies, setReplies] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    getTicket();
    getTicketReplies();
  }, []);
  const getTicket = async () => {
    try {
      const response = await Axios.get(`/ticket/${id}`, {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      });
      setTicket(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const getTicketReplies = async () => {
    try {
      const response = await Axios.get(`/reply/${id}`, {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      });
      setReplies(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const createReply = async () => {
    try {
      const response = await Axios.post(
        "/reply",
        {
          content: content,
          title: title,
          ticket: id,
          user: window.localStorage.getItem("user-id"),
          loves : 0,
        },
        {
          headers: {
            "x-auth-token": window.localStorage.getItem("x-auth-token"),
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <Header title={"Ticket Details"} />
          <div className="section-body mt-3">
            <div className="container-fluid">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12">
                  <div className="card c_grid c_yellow">
                    <div className="card-body text-center">
                      <div className="circle">
                        <img className="rounded-circle" src={user} alt="" />
                      </div>
                      <h6 className="mt-3 mb-0">{ticket.id}</h6>
                      <span>{ticket.departement}</span>
                      <ul className="mt-3 list-unstyled d-flex justify-content-center">
                        <li>
                          <a className="p-3" target="_blank" href="#">
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a className="p-3" target="_blank" href="#">
                            <i className="fa fa-slack"></i>
                          </a>
                        </li>
                        <li>
                          <a className="p-3" target="_blank" href="#">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                      <button className="btn btn-default btn-sm">Follow</button>
                      <button className="btn btn-default btn-sm">
                        Message
                      </button>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Ticket Details</h3>
                      <div className="card-options">
                        <a
                          href="javascript:void(0)"
                          className="card-options-remove"
                        ></a>
                      </div>
                    </div>
                    <div className="card-body">
                      <span>{ticket.details}</span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Ticket Info</h3>
                    </div>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <small className="text-muted">Title: </small>
                          <p className="mb-0">{ticket.title}</p>
                        </li>
                        <li className="list-group-item">
                          <small className="text-muted">Department: </small>
                          <p className="mb-0">{ticket.departement}</p>
                        </li>
                        <li className="list-group-item">
                          <small className="text-muted">Product: </small>
                          <p className="mb-0">{ticket.product}</p>
                        </li>
                        <li className="list-group-item">
                          <small className="text-muted">Date: </small>
                          <p className="mb-0">{ticket.date}</p>
                        </li>
                        <li className="list-group-item">
                          <div>In Progress : {ticket.progress}%</div>
                          <div className="progress progress-xs mb-0">
                            <div
                              className="progress-bar bg-info"
                              style={{ width: `${ticket.progress}` }}
                            ></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="summernote">
                        Hi there,
                        <br />
                        <p>{ticket.details}</p>
                        <p>Thank you!</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Ticket Replies</h3>
                    </div>
                    <div className="card-body">
                      {replies.map((reply, index) => {
                        return (
                          <div className="timeline_item ">
                            <img className="tl_avatar" src={user} alt="" />
                            <span>
                              <a href="javascript:void(0);">
                                {reply.user.username}
                              </a>{" "}
                              {reply.user.team}{" "}
                              <small className="float-right text-right">
                                {dateFormat(reply.createdAt,"dddd  mm  yyyy")}
                              </small>
                            </span>
                            <h6 className="font600">{reply.title}</h6>
                            <div className="msg">
                              <p>{reply.content}</p>
                              <p className="mr-20 text-muted">
                                <i className="fa fa-heart text-pink"></i>{" "}
                                {reply.loves}
                                Love
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Add a Reply</h3>
                    </div>
                    <div className="card-content">
                      <form onSubmit={createReply}>
                        <div className="form-floating mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Content"
                            onChange={(e) => setTitle(e.target.value)}
                          />
                          <label>Title</label>
                        </div>
                        <div className="form-floating mb-3">
                          <textarea
                            className="form-control"
                            placeholder="Content"
                            onChange={(e) => setContent(e.target.value)}
                          ></textarea>
                          <label>Content</label>
                        </div>
                          <button
                            type="submit"
                            className="btn btn-primary w-100 my-3"
                          >
                            Submit The Reply
                          </button>
                      </form>
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

export default TicketDetails;
