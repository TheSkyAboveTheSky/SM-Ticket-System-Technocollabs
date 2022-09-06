import React, { useEffect, useState } from "react";
import Sidebar from "../../../SharedComponents/Sidebar/Sidebar";
import Header from "../../../SharedComponents/Header/Header";
import axios from "../../../SharedComponents/Axios/Axios";
import user from "../../../../assets/images/user.png";
import banner from "../../../../assets/images/banner.jpg";
import Notification from "../../../SharedComponents/Notification/Notification";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Modal from "react-modal";

function ClientList() {
  // Array
  const [clients, setClients] = useState([]);
  // Modal
  const [isOpen, setIsOpen] = useState(false);
  // Update
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState(0);
  const [deal, setDeal] = useState(0);
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [slack, setSlack] = useState("");
  const [github, setGithub] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  useEffect(() => {
    getClients();
  }, []);
  const getClients = async () => {
    const response = await axios.get("/client", {
      headers: { "x-auth-token": window.localStorage.getItem("x-auth-token") },
    });
    setClients(response.data);
  };
  const updateClient = async (id) => {
    try {
      const response = await axios.put(
        `/client/${id}`,
        {
          fullName: fullName,
          country: country,
          address: address,
          email: email,
          projects: project,
          deal: deal,
          twitter: twitter,
          slack: slack,
          github: github,
          linkedin: linkedIn,
          instagram: instagram,
          facebook: facebook,
        },
        {
          headers: {
            "x-auth-token": window.localStorage.getItem("x-auth-token"),
          },
        }
      );
      await Notification("success", "Successufly creating The Client");
      closeModal();
      window.location.reload();
    } catch (err) {
      console.error(err);
      Notification("error", "Something went wrong");
    }
  };
  const deleteClient = async (id) => {
    try {
      const response = await axios.delete(`/client/${id}`, {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      });
      await Notification("success", "Successufly Deleting the Client");
      window.location.reload();
    } catch (err) {
      Notification("error", "Something went wrong when deleting the client");
    }
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
          <Header title={"Client List"} />
          <div>
            <NotificationContainer />
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
                              <a
                                className="btn btn-sm"
                                style={{ color: "red" }}
                                onClick={() => {
                                  deleteClient(client._id);
                                }}
                              >
                                <i className="fa fa-trash"></i> Delete
                              </a>
                              <button
                                className="btn btn-sm"
                                style={{ color: "green" }}
                                onClick={() => {
                                  openModal();
                                }}
                              >
                                <i className="fa fa-pen-to-square"></i>Update
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
                                        <form onSubmit={() => updateClient(client._id)}>
                                          <div className="text-center mb-3">
                                            <h3 className="text-info">
                                              Update Clients
                                            </h3>
                                          </div>
                                          <div className="row g-3">
                                            <div className="col-md-6 form-floating mb-3">
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="FullName"
                                                onChange={(e) =>
                                                  setFullName(e.target.value)
                                                }
                                              />
                                              <label>Full Name : {client.fullName}</label>
                                            </div>
                                            <div className="col-md-6 form-floating mb-3">
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Country"
                                                onChange={(e) =>
                                                  setCountry(e.target.value)
                                                }
                                              />
                                              <label>Country : {client.country}</label>
                                            </div>
                                          </div>
                                          <div className="row g-3">
                                            <div className="col-md-6 form-floating mb-3">
                                              <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Address"
                                                onChange={(e) =>
                                                  setAddress(e.target.value)
                                                }
                                              />
                                              <label>Address : {client.address}</label>
                                            </div>
                                            <div className="col-md-6 form-floating mb-3">
                                              <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                onChange={(e) =>
                                                  setEmail(e.target.value)
                                                }
                                              />
                                              <label>Email : {client.email}</label>
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
                                                onChange={(e) =>
                                                  setProject(e.target.value)
                                                }
                                              />
                                              <label>Project : {client.projects}</label>
                                            </div>
                                            <div className="col-md-6 form-floating mb-3">
                                              <input
                                                type="Number"
                                                className="form-control"
                                                placeholder="Deal"
                                                min="0"
                                                step="1"
                                                onChange={(e) =>
                                                  setDeal(e.target.value)
                                                }
                                              />
                                              <label>Deal : {client.deal}</label>
                                            </div>
                                          </div>
                                          <div className="form-floating mb-3">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Facebook"
                                              onChange={(e) =>
                                                setFacebook(e.target.value)
                                              }
                                            />
                                            <label>Facebook</label>
                                          </div>
                                          <div className="form-floating mb-3">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Instagram"
                                              onChange={(e) =>
                                                setInstagram(e.target.value)
                                              }
                                            />
                                            <label>Instagram</label>
                                          </div>
                                          <div className="form-floating mb-3">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Twitter"
                                              onChange={(e) =>
                                                setTwitter(e.target.value)
                                              }
                                            />
                                            <label>Twitter</label>
                                          </div>
                                          <div className="form-floating mb-3">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Slack"
                                              onChange={(e) =>
                                                setSlack(e.target.value)
                                              }
                                            />
                                            <label>Slack</label>
                                          </div>
                                          <div className="form-floating mb-3">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="Github"
                                              onChange={(e) =>
                                                setGithub(e.target.value)
                                              }
                                            />
                                            <label>Github</label>
                                          </div>
                                          <div className="form-floating mb-3">
                                            <input
                                              type="text"
                                              className="form-control"
                                              placeholder="LinkedIn"
                                              onChange={(e) =>
                                                setLinkedIn(e.target.value)
                                              }
                                            />
                                            <label>LinkedIn</label>
                                          </div>
                                          <button
                                            type="submit"
                                            className="btn btn-primary w-40 my-3" style={{marginRight:'1rem'}}
                                          >
                                            Create Client
                                          </button>
                                          <button className="btn btn-danger w-40 my-3" onClick={() => closeModal()}>
                                            Close
                                          </button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Modal>
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
