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
                  id="todo-list"
                  role="tabpanel"
                >
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive todo_list">
                        <table className="table table-hover table-striped table-vcenter mb-0 text-nowrap">
                          <thead>
                            <tr>
                              <th></th>
                              <th className="w150 text-right">Due</th>
                              <th className="w100">Priority</th>
                              <th className="w80">
                                <i className="icon-user"></i>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <label className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    name="example-checkbox1"
                                    value="option1"
                                    checked
                                  />
                                  <span className="custom-control-label">
                                    Report Panel Usag
                                  </span>
                                </label>
                              </td>
                              <td className="text-right">Feb 12-2019</td>
                              <td>
                                <span className="tag tag-danger ml-0 mr-0">
                                  HIGH
                                </span>
                              </td>
                              <td>
                                <span
                                  className="avatar avatar-pink"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="Avatar Name"
                                >
                                  NG
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    name="example-checkbox1"
                                    value="option1"
                                  />
                                  <span className="custom-control-label">
                                    Report Panel Usag
                                  </span>
                                </label>
                              </td>
                              <td className="text-right">Feb 18-2019</td>
                              <td>
                                <span className="tag tag-warning ml-0 mr-0">
                                  MED
                                </span>
                              </td>
                              <td>
                                <img
                                  src="../assets/images/xs/avatar1.jpg"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  alt="Avatar"
                                  className="avatar"
                                  data-original-title="Avatar Name"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    name="example-checkbox1"
                                    value="option1"
                                    checked
                                  />
                                  <span className="custom-control-label">
                                    New logo design for Angular Admin
                                  </span>
                                </label>
                              </td>
                              <td className="text-right">March 02-2019</td>
                              <td>
                                <span className="tag tag-success ml-0 mr-0">
                                  High
                                </span>
                              </td>
                              <td>
                                <img
                                  src="../assets/images/xs/avatar2.jpg"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  alt="Avatar"
                                  className="avatar"
                                  data-original-title="Avatar Name"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    name="example-checkbox1"
                                    value="option1"
                                    checked
                                  />
                                  <span className="custom-control-label">
                                    Report Panel Usag
                                  </span>
                                </label>
                              </td>
                              <td className="text-right">Feb 12-2019</td>
                              <td>
                                <span className="tag tag-danger ml-0 mr-0">
                                  HIGH
                                </span>
                              </td>
                              <td>
                                <span
                                  className="avatar avatar-pink"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="Avatar Name"
                                >
                                  NG
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    name="example-checkbox1"
                                    value="option1"
                                  />
                                  <span className="custom-control-label">
                                    Report Panel Usag
                                  </span>
                                </label>
                              </td>
                              <td className="text-right">Feb 18-2019</td>
                              <td>
                                <span className="tag tag-warning ml-0 mr-0">
                                  MED
                                </span>
                              </td>
                              <td>
                                <img
                                  src="../assets/images/xs/avatar3.jpg"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  alt="Avatar"
                                  className="avatar"
                                  data-original-title="Avatar Name"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    name="example-checkbox1"
                                    value="option1"
                                    checked
                                  />
                                  <span className="custom-control-label">
                                    New logo design for Angular Admin
                                  </span>
                                </label>
                              </td>
                              <td className="text-right">March 02-2019</td>
                              <td>
                                <span className="tag tag-success ml-0 mr-0">
                                  High
                                </span>
                              </td>
                              <td>
                                <span
                                  className="avatar avatar-blue"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  data-original-title="Avatar Name"
                                >
                                  NG
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    name="example-checkbox1"
                                    value="option1"
                                  />
                                  <span className="custom-control-label">
                                    Design PSD files for Angular Admin
                                  </span>
                                </label>
                              </td>
                              <td className="text-right">March 20-2019</td>
                              <td>
                                <span className="tag tag-warning ml-0 mr-0">
                                  MED
                                </span>
                              </td>
                              <td>
                                <img
                                  src="../assets/images/xs/avatar4.jpg"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  alt="Avatar"
                                  className="avatar"
                                  data-original-title="Avatar Name"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <label className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    name="example-checkbox1"
                                    value="option1"
                                  />
                                  <span className="custom-control-label">
                                    Design PSD files for Angular Admin
                                  </span>
                                </label>
                              </td>
                              <td className="text-right">March 20-2019</td>
                              <td>
                                <span className="tag tag-warning ml-0 mr-0">
                                  MED
                                </span>
                              </td>
                              <td>
                                <img
                                  src="../assets/images/xs/avatar5.jpg"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title=""
                                  alt="Avatar"
                                  className="avatar"
                                  data-original-title="Avatar Name"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
