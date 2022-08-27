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
          <div className="section-body">
            <div className="container-fluid">
              <div className="tab-content taskboard">
                <div
                  className="tab-pane fade show active"
                  id="TaskBoard-list"
                  role="tabpanel"
                >
                  <div className="row">
                    <div className="col-md-12">
                      <div className="table-responsive">
                        <table className="table table-hover table-vcenter mb-0 table_custom spacing8 text-nowrap">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Task</th>
                              <th>Team</th>
                              <th>Duration</th>
                              <th>Action</th>
                              <th className="w200"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>01</td>
                              <td>
                                <h6 className="mb-0">
                                  New code Update on github
                                </h6>
                                <span>
                                  It is a long established fact that a reader
                                  will be distracted...
                                </span>
                              </td>
                              <td>
                              </td>
                              <td>
                                <div className="text-info">
                                  Start: 3 Jun 2019
                                </div>
                                <div className="text-pink">
                                  End: 15 Jun 2019
                                </div>
                              </td>
                              <td>
                                <span className="tag tag-blue">Planned</span>
                              </td>
                              <td>
                                <div className="clearfix">
                                  <div className="float-left">
                                    <strong>0%</strong>
                                  </div>
                                  <div className="float-right">
                                    <small className="text-muted">
                                      Progress
                                    </small>
                                  </div>
                                </div>
                                <div className="progress progress-xs">
                                  <div
                                    className="progress-bar bg-azure"
                                    role="progressbar"
                                    style={{ width: "0%" }}
                                    aria-valuenow="42"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>02</td>
                              <td>
                                <h6 className="mb-0">Design Events</h6>
                                <span>
                                  It is a long established fact that a reader
                                  will be distracted...
                                </span>
                              </td>
                              <td>
                              </td>
                              <td>
                                <div className="text-info">
                                  Start: 02 Jun 2019
                                </div>
                                <div className="text-pink">
                                  End: 08 Jun 2019
                                </div>
                              </td>
                              <td>
                                <span className="tag tag-green">Completed</span>
                              </td>
                              <td>
                                <div className="clearfix">
                                  <div className="float-left">
                                    <strong>100%</strong>
                                  </div>
                                  <div className="float-right">
                                    <small className="text-muted">
                                      Progress
                                    </small>
                                  </div>
                                </div>
                                <div className="progress progress-xs">
                                  <div
                                    className="progress-bar bg-green"
                                    role="progressbar"
                                    style={{ width: "100%" }}
                                    aria-valuenow="42"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>03</td>
                              <td>
                                <h6 className="mb-0">
                                  Feed Details on Dribbble
                                </h6>
                                <span>
                                  The point of using Lorem Ipsum is that...
                                </span>
                              </td>
                              <td>
                              </td>
                              <td>
                                <div className="text-info">
                                  Start: 3 Jun 2019
                                </div>
                                <div className="text-pink">
                                  End: 15 Jun 2019
                                </div>
                              </td>
                              <td>
                                <span className="tag tag-orange">
                                  In progress
                                </span>
                              </td>
                              <td>
                                <div className="clearfix">
                                  <div className="float-left">
                                    <strong>35%</strong>
                                  </div>
                                  <div className="float-right">
                                    <small className="text-muted">
                                      Progress
                                    </small>
                                  </div>
                                </div>
                                <div className="progress progress-xs">
                                  <div
                                    className="progress-bar bg-azure"
                                    role="progressbar"
                                    style={{ width: "35%" }}
                                    aria-valuenow="42"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>04</td>
                              <td>
                                <h6 className="mb-0">
                                  New code Update on github
                                </h6>
                                <span>
                                  It is a long established fact that a reader
                                  will be distracted...
                                </span>
                              </td>
                              <td>
                              </td>
                              <td>
                                <div className="text-info">
                                  Start: 13 Jun 2019
                                </div>
                                <div className="text-pink">
                                  End: 23 Jun 2019
                                </div>
                              </td>
                              <td>
                                <span className="tag tag-orange">
                                  In progress
                                </span>
                              </td>
                              <td>
                                <div className="clearfix">
                                  <div className="float-left">
                                    <strong>75%</strong>
                                  </div>
                                  <div className="float-right">
                                    <small className="text-muted">
                                      Progress
                                    </small>
                                  </div>
                                </div>
                                <div className="progress progress-xs">
                                  <div
                                    className="progress-bar bg-green"
                                    role="progressbar"
                                    style={{ width: "75%" }}
                                    aria-valuenow="42"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>05</td>
                              <td>
                                <h6 className="mb-0">
                                  New code Update on github
                                </h6>
                                <span>
                                  Contrary to popular belief, Lorem Ipsum is not
                                  simply random text.
                                </span>
                              </td>
                              <td>
                              </td>
                              <td>
                                <div className="text-info">
                                  Start: 8 Jun 2019
                                </div>
                                <div className="text-pink">
                                  End: 15 Jun 2019
                                </div>
                              </td>
                              <td>
                                <span className="tag tag-orange">
                                  In progress
                                </span>
                              </td>
                              <td>
                                <div className="clearfix">
                                  <div className="float-left">
                                    <strong>35%</strong>
                                  </div>
                                  <div className="float-right">
                                    <small className="text-muted">
                                      Progress
                                    </small>
                                  </div>
                                </div>
                                <div className="progress progress-xs">
                                  <div
                                    className="progress-bar bg-azure"
                                    role="progressbar"
                                    style={{ width: "35%" }}
                                    aria-valuenow="42"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>06</td>
                              <td>
                                <h6 className="mb-0">Angular App Design bug</h6>
                                <span>
                                  There are many variations of passages of Lorem
                                  Ipsum available...
                                </span>
                              </td>
                              <td>
                              </td>
                              <td>
                                <div className="text-info">
                                  Start: 3 Jun 2019
                                </div>
                                <div className="text-pink">
                                  End: 15 Jun 2019
                                </div>
                              </td>
                              <td>
                                <span className="tag tag-orange">Planned</span>
                              </td>
                              <td>
                                <div className="clearfix">
                                  <div className="float-left">
                                    <strong>35%</strong>
                                  </div>
                                  <div className="float-right">
                                    <small className="text-muted">
                                      Progress
                                    </small>
                                  </div>
                                </div>
                                <div className="progress progress-xs">
                                  <div
                                    className="progress-bar bg-azure"
                                    role="progressbar"
                                    style={{ width: "35%" }}
                                    aria-valuenow="42"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
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
