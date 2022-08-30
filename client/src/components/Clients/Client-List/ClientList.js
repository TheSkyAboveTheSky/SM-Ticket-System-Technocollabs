import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import axios from "../../Axios/Axios";
import user from "../../../assets/images/user.png";

function ClientList() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    getClients();
  }, []);
  const getClients = async () => {
    const response = await axios.get("/client",{headers : {'x-auth-token' : window.localStorage.getItem('x-auth-token')}});
    setClients(response.data);
  };
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <Header title={"Client List"} />
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
          <>
            <div className="section-body mt-3">
              <div className="container-fluid">
                <div className="row clearfix">
                  <div className="col-lg-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-md-flex justify-content-between mb-2">
                          <ul className="nav nav-tabs b-none">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                data-toggle="tab"
                                href="/Client-List"
                              >
                                <i className="fa fa-list-ul"></i> Clients List
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="/add-Client"
                              >
                                <i className="fa fa-plus"></i> Add New
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="input-group mb-1">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Clinet Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-5 col-md-4 col-sm-6">
                            <div className="input-group mb-1">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Project"
                              />
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-4 col-sm-12">
                            <a
                              className="btn btn-primary btn-block mb-1 px-6"
                              title=""
                            >
                              Search
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-body">
              <div className="container-fluid">
                <div className="tab-content">
                  <div className="row clearfix">
                    {clients.map((client) => {
                      return (
                        <div className="col-xl-4 col-lg-4 col-md-6">
                          <div className="card">
                            <div className="card-body text-center ribbon">
                              <div className="ribbon-box green">
                                {client.country}
                              </div>
                              <img
                                className="rounded-circle img-thumbnail w100"
                                src={user}
                                alt=""
                              />
                              <h6 className="mt-3 mb-0">{client.fullName}</h6>
                              <span>
                                <a className="__cf_email__">{client.email}</a>
                              </span>
                              <ul className="mt-3 list-unstyled d-flex justify-content-center">
                                {client.facebook ? (
                                  <li>
                                    <a
                                      className="p-3"
                                      target="_blank"
                                      href={client.facebook}
                                    >
                                      <i className="fa fa-facebook"></i>
                                    </a>
                                  </li>
                                ) : (
                                  ""
                                )}
                                {client.slack ? (
                                  <li>
                                    <a
                                      className="p-3"
                                      target="_blank"
                                      href={client.slack}
                                    >
                                      <i className="fa fa-slack"></i>
                                    </a>
                                  </li>
                                ) : (
                                  ""
                                )}
                                {client.linkedin ? (
                                  <li>
                                    <a
                                      className="p-3"
                                      target="_blank"
                                      href={client.linkedin}
                                    >
                                      <i className="fa fa-linkedin"></i>
                                    </a>
                                  </li>
                                ) : (
                                  ""
                                )}
                                {client.twitter ? (
                                  <li>
                                    <a
                                      className="p-3"
                                      target="_blank"
                                      href={client.twitter}
                                    >
                                      <i className="fa fa-twitter"></i>
                                    </a>
                                  </li>
                                ) : (
                                  ""
                                )}
                                {client.instagram ? (
                                  <li>
                                    <a
                                      className="p-3"
                                      target="_blank"
                                      href={client.instagram}
                                    >
                                      <i className="fa fa-instagram"></i>
                                    </a>
                                  </li>
                                ) : (
                                  ""
                                )}
                                {client.github ? (
                                  <li>
                                    <a
                                      className="p-3"
                                      target="_blank"
                                      href={client.github}
                                    >
                                      <i className="fa fa-github"></i>
                                    </a>
                                  </li>
                                ) : (
                                  ""
                                )}
                              </ul>
                              <button className="btn btn-default btn-sm">
                                View Profile
                              </button>
                              <button className="btn btn-default btn-sm">
                                Message
                              </button>
                              <div className="row text-center mt-4">
                                <div className="col-6 border-right">
                                  <label className="mb-0">Project</label>
                                  <h4 className="font-18">{client.projects}</h4>
                                </div>
                                <div className="col-6">
                                  <label className="mb-0">Deal</label>
                                  <h4 className="font-18">${client.deal}</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </>
    </div>
  );
}

export default ClientList;
