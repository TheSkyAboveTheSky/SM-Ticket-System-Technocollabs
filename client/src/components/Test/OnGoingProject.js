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
          <div className="section-body mt-3">
            <div className="container-fluid">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="Project-OnGoing"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">New Admin Design</h3>
                          <div className="card-options">
                            <label className="custom-switch m-0">
                              <input
                                type="checkbox"
                                value="1"
                                className="custom-switch-input"
                              />
                              <span className="custom-switch-indicator"></span>
                            </label>
                            <a
                              href="#"
                              className="card-options-collapse"
                              data-toggle="card-collapse"
                            >
                              <i className="fe fe-chevron-up"></i>
                            </a>
                          </div>
                        </div>
                        <div className="card-body">
                          <span className="tag tag-blue mb-3">Web Design</span>
                          <p>
                            Aperiam deleniti fugit incidunt, iste, itaque minima
                            neque pariatur perferendis temporibus!
                          </p>
                          <div className="row">
                            <div className="col-5 py-1">
                              <strong>Created:</strong>
                            </div>
                            <div className="col-7 py-1">
                              09 Jun 2019 11:32AM
                            </div>
                            <div className="col-5 py-1">
                              <strong>Creator:</strong>
                            </div>
                            <div className="col-7 py-1">Nathan Guerrero</div>
                            <div className="col-5 py-1">
                              <strong>Question:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>23</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Comments:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>32</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Bug:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>5</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Team:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <div className="avatar-list avatar-list-stacked">
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar1.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar2.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar3.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar4.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar5.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <span className="avatar avatar-sm">+8</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>15%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Progress</small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-red"
                              role="progressbar"
                              style={{ width : "15%"}}
                              aria-valuenow="36"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">Job Portal Web App</h3>
                          <div className="card-options">
                            <label className="custom-switch m-0">
                              <input
                                type="checkbox"
                                value="1"
                                className="custom-switch-input"

                              />
                              <span className="custom-switch-indicator"></span>
                            </label>
                            <a
                              href="#"
                              className="card-options-collapse"
                              data-toggle="card-collapse"
                            >
                              <i className="fe fe-chevron-up"></i>
                            </a>
                          </div>
                        </div>
                        <div className="card-body">
                          <span className="tag tag-pink mb-3">Angular</span>
                          <p>
                            Aperiam deleniti fugit incidunt, iste, itaque minima
                            neque pariatur perferendis temporibus!
                          </p>
                          <div className="row">
                            <div className="col-5 py-1">
                              <strong>Created:</strong>
                            </div>
                            <div className="col-7 py-1">
                              09 Jun 2019 11:32AM
                            </div>
                            <div className="col-5 py-1">
                              <strong>Creator:</strong>
                            </div>
                            <div className="col-7 py-1">Nathan Guerrero</div>
                            <div className="col-5 py-1">
                              <strong>Question:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>55</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Comments:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>43</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Bug:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>5</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Team:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <div className="avatar-list avatar-list-stacked">
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar6.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar7.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar8.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar1.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar2.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <span className="avatar avatar-sm">+8</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>75%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Progress</small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-green"
                              role="progressbar"
                              style={{ width : "75%"}}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">
                            App design and Development
                          </h3>
                          <div className="card-options">
                            <label className="custom-switch m-0">
                              <input
                                type="checkbox"
                                value="1"
                                className="custom-switch-input"
                              />
                              <span className="custom-switch-indicator"></span>
                            </label>
                            <a
                              href="#"
                              className="card-options-collapse"
                              data-toggle="card-collapse"
                            >
                              <i className="fe fe-chevron-up"></i>
                            </a>
                          </div>
                        </div>
                        <div className="card-body">
                          <span className="tag tag-green mb-3">Android</span>
                          <p>
                            Aperiam deleniti fugit incidunt, iste, itaque minima
                            neque pariatur perferendis temporibus!
                          </p>
                          <div className="row">
                            <div className="col-5 py-1">
                              <strong>Created:</strong>
                            </div>
                            <div className="col-7 py-1">
                              09 Jun 2019 11:32AM
                            </div>
                            <div className="col-5 py-1">
                              <strong>Creator:</strong>
                            </div>
                            <div className="col-7 py-1">Nathan Guerrero</div>
                            <div className="col-5 py-1">
                              <strong>Question:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>12</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Comments:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>96</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Bug:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>7</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Team:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <div className="avatar-list avatar-list-stacked">
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar1.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar2.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar5.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <span className="avatar avatar-sm">+8</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>47%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Progress</small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-blue"
                              role="progressbar"
                              style={{ width : "47%"}}
                              aria-valuenow="47"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">Job Portal Web App</h3>
                          <div className="card-options">
                            <label className="custom-switch m-0">
                              <input
                                type="checkbox"
                                value="1"
                                className="custom-switch-input"
                              />
                              <span className="custom-switch-indicator"></span>
                            </label>
                            <a
                              href="#"
                              className="card-options-collapse"
                              data-toggle="card-collapse"
                            >
                              <i className="fe fe-chevron-up"></i>
                            </a>
                          </div>
                        </div>
                        <div className="card-body">
                          <span className="tag tag-pink mb-3">Angular</span>
                          <p>
                            Aperiam deleniti fugit incidunt, iste, itaque minima
                            neque pariatur perferendis temporibus!
                          </p>
                          <div className="row">
                            <div className="col-5 py-1">
                              <strong>Created:</strong>
                            </div>
                            <div className="col-7 py-1">
                              09 Jun 2019 11:32AM
                            </div>
                            <div className="col-5 py-1">
                              <strong>Creator:</strong>
                            </div>
                            <div className="col-7 py-1">Nathan Guerrero</div>
                            <div className="col-5 py-1">
                              <strong>Question:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>55</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Comments:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>43</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Bug:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>5</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Team:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <div className="avatar-list avatar-list-stacked">
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar6.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar7.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar8.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar1.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar2.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <span className="avatar avatar-sm">+8</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>75%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Progress</small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-green"
                              role="progressbar"
                              style={{ width : "75%"}}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">One Page landing</h3>
                          <div className="card-options">
                            <label className="custom-switch m-0">
                              <input
                                type="checkbox"
                                value="1"
                                className="custom-switch-input"
                              />
                              <span className="custom-switch-indicator"></span>
                            </label>
                            <a
                              href="#"
                              className="card-options-collapse"
                              data-toggle="card-collapse"
                            >
                              <i className="fe fe-chevron-up"></i>
                            </a>
                          </div>
                        </div>
                        <div className="card-body">
                          <span className="tag tag-blue mb-3">Wordpress</span>
                          <p>
                            Aperiam deleniti fugit incidunt, iste, itaque minima
                            neque pariatur perferendis temporibus!
                          </p>
                          <div className="row">
                            <div className="col-5 py-1">
                              <strong>Created:</strong>
                            </div>
                            <div className="col-7 py-1">
                              09 Jun 2019 11:32AM
                            </div>
                            <div className="col-5 py-1">
                              <strong>Creator:</strong>
                            </div>
                            <div className="col-7 py-1">Nathan Guerrero</div>
                            <div className="col-5 py-1">
                              <strong>Question:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>23</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Comments:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>32</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Bug:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>5</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Team:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <div className="avatar-list avatar-list-stacked">
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar1.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar2.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar3.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar4.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar5.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <span className="avatar avatar-sm">+8</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>17%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Progress</small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-red"
                              role="progressbar"
                              style={{ width : "17%"}}
                              aria-valuenow="36"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">Job Portal Web App</h3>
                          <div className="card-options">
                            <label className="custom-switch m-0">
                              <input
                                type="checkbox"
                                value="1"
                                className="custom-switch-input"
                              />
                              <span className="custom-switch-indicator"></span>
                            </label>
                            <a
                              href="#"
                              className="card-options-collapse"
                              data-toggle="card-collapse"
                            >
                              <i className="fe fe-chevron-up"></i>
                            </a>
                          </div>
                        </div>
                        <div className="card-body">
                          <span className="tag tag-gray mb-3">iOS App</span>
                          <p>
                            Aperiam deleniti fugit incidunt, iste, itaque minima
                            neque pariatur perferendis temporibus!
                          </p>
                          <div className="row">
                            <div className="col-5 py-1">
                              <strong>Created:</strong>
                            </div>
                            <div className="col-7 py-1">
                              09 Jun 2019 11:32AM
                            </div>
                            <div className="col-5 py-1">
                              <strong>Creator:</strong>
                            </div>
                            <div className="col-7 py-1">Nathan Guerrero</div>
                            <div className="col-5 py-1">
                              <strong>Question:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>55</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Comments:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>43</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Bug:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <strong>5</strong>
                            </div>
                            <div className="col-5 py-1">
                              <strong>Team:</strong>
                            </div>
                            <div className="col-7 py-1">
                              <div className="avatar-list avatar-list-stacked">
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar6.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar7.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar8.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar1.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <img
                                  className="avatar avatar-sm"
                                  src="../assets/images/xs/avatar2.jpg"
                                  data-toggle="tooltip"
                                  title=""
                                  data-original-title="Avatar Name"
                                />
                                <span className="avatar avatar-sm">+8</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer">
                          <div className="clearfix">
                            <div className="float-left">
                              <strong>81%</strong>
                            </div>
                            <div className="float-right">
                              <small className="text-muted">Progress</small>
                            </div>
                          </div>
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-green"
                              role="progressbar"
                              style={{ width : "81%"}}
                              aria-valuenow="75"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
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

export default Test;
