import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import user from '../../assets/images/user.png';

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
                                href="#list"
                              >
                                <i className="fa fa-list-ul"></i> Clients List
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#addnew"
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
                              href="javascript:void(0);"
                              className="btn btn-primary btn-block mb-1"
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
                  <div
                    className="tab-pane fade show active"
                    id="list"
                    role="tabpanel"
                  >
                    <div className="row clearfix">
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="card">
                          <div className="card-body text-center ribbon">
                            <div className="ribbon-box green">New</div>
                            <img
                              className="rounded-circle img-thumbnail w100"
                              src={user}
                              alt=""
                            />
                            <h6 className="mt-3 mb-0">Michelle Green</h6>
                            <span>
                              <a
                                href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="d4beb5a7bbbaf9a4bba6a0b1a694bdbab2bbfab7bbb9"
                              >
                                [email&#160;protected]
                              </a>
                            </span>
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
                            <button className="btn btn-default btn-sm">
                              View Profile
                            </button>
                            <button className="btn btn-default btn-sm">
                              Message
                            </button>
                            <div className="row text-center mt-4">
                              <div className="col-6 border-right">
                                <label className="mb-0">Project</label>
                                <h4 className="font-18">07</h4>
                              </div>
                              <div className="col-6">
                                <label className="mb-0">Deal</label>
                                <h4 className="font-18">$2,510</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="card">
                          <div className="card-body text-center ribbon">
                            <div className="ribbon-box indigo">India</div>
                            <img
                              className="rounded-circle img-thumbnail w100"
                              src="../assets/images/sm/avatar3.jpg"
                              alt=""
                            />
                            <h6 className="mt-3 mb-0">David Wallace</h6>
                            <span>
                              <a
                                href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="074a6e646f626b6b62476e6961682964686a"
                              >
                                [email&#160;protected]
                              </a>
                            </span>
                            <ul className="mt-3 list-unstyled d-flex justify-content-center">
                              <li>
                                <a className="p-3" target="_blank" href="#">
                                  <i className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a className="p-3" target="_blank" href="#">
                                  <i className="fa fa-dribbble"></i>
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
                            <button className="btn btn-default btn-sm">
                              View Profile
                            </button>
                            <button className="btn btn-default btn-sm">
                              Message
                            </button>
                            <div className="row text-center mt-4">
                              <div className="col-6 border-right">
                                <label className="mb-0">Project</label>
                                <h4 className="font-18">14</h4>
                              </div>
                              <div className="col-6">
                                <label className="mb-0">Deal</label>
                                <h4 className="font-18">$7,510</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="card">
                          <div className="card-body text-center">
                            <img
                              className="rounded-circle img-thumbnail w100"
                              src="../assets/images/sm/avatar4.jpg"
                              alt=""
                            />
                            <h6 className="mt-3 mb-0">Michelle Green</h6>
                            <span>
                              <a
                                href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="f49e95879b9ad9849b86809186b49d9a929bda979b99"
                              >
                                [email&#160;protected]
                              </a>
                            </span>
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
                            <button className="btn btn-default btn-sm">
                              View Profile
                            </button>
                            <button className="btn btn-default btn-sm">
                              Message
                            </button>
                            <div className="row text-center mt-4">
                              <div className="col-6 border-right">
                                <label className="mb-0">Project</label>
                                <h4 className="font-18">08</h4>
                              </div>
                              <div className="col-6">
                                <label className="mb-0">Deal</label>
                                <h4 className="font-18">$5,510</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="card">
                          <div className="card-body text-center">
                            <img
                              className="rounded-circle img-thumbnail w100"
                              src="../assets/images/sm/avatar6.jpg"
                              alt=""
                            />
                            <h6 className="mt-3 mb-0">Michelle Green</h6>
                            <span>
                              <a
                                href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="bed4dfcdd1d093ced1cccadbccfed7d0d8d190ddd1d3"
                              >
                                [email&#160;protected]
                              </a>
                            </span>
                            <ul className="mt-3 list-unstyled d-flex justify-content-center">
                              <li>
                                <a className="p-3" target="_blank" href="#">
                                  <i className="fa fa-facebook"></i>
                                </a>
                              </li>
                              <li>
                                <a className="p-3" target="_blank" href="#">
                                  <i className="fa fa-pinterest"></i>
                                </a>
                              </li>
                              <li>
                                <a className="p-3" target="_blank" href="#">
                                  <i className="fa fa-linkedin"></i>
                                </a>
                              </li>
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
                                <h4 className="font-18">05</h4>
                              </div>
                              <div className="col-6">
                                <label className="mb-0">Deal</label>
                                <h4 className="font-18">$1,071</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="card">
                          <div className="card-body text-center ribbon">
                            <div className="ribbon-box orange">Gold</div>
                            <img
                              className="rounded-circle img-thumbnail w100"
                              src="../assets/images/sm/avatar5.jpg"
                              alt=""
                            />
                            <h6 className="mt-3 mb-0">Michelle Green</h6>
                            <span>
                              <a
                                href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="402a21332f2e6d302f3234253200292e262f6e232f2d"
                              >
                                [email&#160;protected]
                              </a>
                            </span>
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
                            <button className="btn btn-default btn-sm">
                              View Profile
                            </button>
                            <button className="btn btn-default btn-sm">
                              Message
                            </button>
                            <div className="row text-center mt-4">
                              <div className="col-6 border-right">
                                <label className="mb-0">Project</label>
                                <h4 className="font-18">31</h4>
                              </div>
                              <div className="col-6">
                                <label className="mb-0">Deal</label>
                                <h4 className="font-18">$45,510</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="card">
                          <div className="card-body text-center">
                            <img
                              className="rounded-circle img-thumbnail w100"
                              src="../assets/images/sm/avatar1.jpg"
                              alt=""
                            />
                            <h6 className="mt-3 mb-0">Sean Black</h6>
                            <span>
                              <a
                                href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="7a101b091514570a15080e1f083a13141c1554191517"
                              >
                                [email&#160;protected]
                              </a>
                            </span>
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
                            <button className="btn btn-default btn-sm">
                              View Profile
                            </button>
                            <button className="btn btn-default btn-sm">
                              Message
                            </button>
                            <div className="row text-center mt-4">
                              <div className="col-6 border-right">
                                <label className="mb-0">Project</label>
                                <h4 className="font-18">31</h4>
                              </div>
                              <div className="col-6">
                                <label className="mb-0">Deal</label>
                                <h4 className="font-18">$45,510</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="card">
                          <div className="card-body text-center ribbon">
                            <div className="ribbon-box pink">USA</div>
                            <img
                              className="rounded-circle img-thumbnail w100"
                              src="../assets/images/sm/avatar2.jpg"
                              alt=""
                            />
                            <h6 className="mt-3 mb-0">Jason Porter</h6>
                            <span>
                              <a
                                href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="044765766b68446d6a626b2a676b69"
                              >
                                [email&#160;protected]
                              </a>
                            </span>
                            <ul className="mt-3 list-unstyled d-flex justify-content-center">
                              <li>
                                <a className="p-3" target="_blank" href="#">
                                  <i className="fa fa-skype"></i>
                                </a>
                              </li>
                              <li>
                                <a className="p-3" target="_blank" href="#">
                                  <i className="fa fa-instagram"></i>
                                </a>
                              </li>
                              <li>
                                <a className="p-3" target="_blank" href="#">
                                  <i className="fa fa-dribbble"></i>
                                </a>
                              </li>
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
                                <h4 className="font-18">22</h4>
                              </div>
                              <div className="col-6">
                                <label className="mb-0">Deal</label>
                                <h4 className="font-18">$12,510</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="card">
                          <div className="card-body text-center">
                            <img
                              className="rounded-circle img-thumbnail w100"
                              src="../assets/images/sm/avatar2.jpg"
                              alt=""
                            />
                            <h6 className="mt-3 mb-0">David Wallace</h6>
                            <span>
                              <a
                                href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                className="__cf_email__"
                                data-cfemail="3c565d4f5352114c534e48594e7c55525a53125f5351"
                              >
                                [email&#160;protected]
                              </a>
                            </span>
                            <ul className="mt-3 list-unstyled d-flex justify-content-center">
                              <li>
                                <a className="p-3" target="_blank" href="#">
                                  <i className="fa fa-flickr"></i>
                                </a>
                              </li>
                              <li>
                                <a className="p-3" target="_blank" href="#">
                                  <i className="fa fa-dropbox"></i>
                                </a>
                              </li>
                              <li>
                                <a className="p-3" target="_blank" href="#">
                                  <i className="fa fa-apple"></i>
                                </a>
                              </li>
                              <li>
                                <a className="p-3" target="_blank" href="#">
                                  <i className="fa fa-pinterest"></i>
                                </a>
                              </li>
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
                                <h4 className="font-18">12</h4>
                              </div>
                              <div className="col-6">
                                <label className="mb-0">Deal</label>
                                <h4 className="font-18">$1,840</h4>
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
      </>
    </div>
  );
}

export default Test;
