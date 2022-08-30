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
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="list"
                  role="tabpanel"
                >
                  <div className="row clearfix">
                    <div className="col-lg-12">
                      <div className="table-responsive" id="users">
                        <table className="table table-hover table-vcenter text-nowrap table_custom border-style list">
                          <tbody>
                            <tr className="">
                              <td className="width35 hidden-xs">
                                <a
                                  href="javascript:void(0);"
                                  className="mail-star"
                                >
                                  <i className="fa fa-star"></i>
                                </a>
                              </td>
                              <td className="text-center width40">
                                <div className="avatar d-block">
                                  <img
                                    className="avatar"
                                    src="../assets/images/xs/avatar4.jpg"
                                    alt="avatar"
                                  />
                                </div>
                              </td>
                              <td>
                                <div>
                                  <a href="javascript:void(0);">John Smith</a>
                                </div>
                                <div className="text-muted">+264-625-2583</div>
                              </td>
                              <td className="hidden-xs">
                                <div className="text-muted">
                                  <a
                                    href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="107a7f787e637d79647850797e767f3e737f7d"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </div>
                              </td>
                              <td className="hidden-sm">
                                <div className="text-muted">
                                  455 S. Airport St. Moncks Corner, SC 29461
                                </div>
                              </td>
                              <td className="text-right">
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Phone"
                                >
                                  <i className="fa fa-phone"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Mail"
                                >
                                  <i className="fa fa-envelope"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link hidden-xs js-sweetalert"
                                  data-type="confirm"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Delete"
                                >
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr className="">
                              <td className="width35 hidden-xs">
                                <a
                                  href="javascript:void(0);"
                                  className="mail-star active"
                                >
                                  <i className="fa fa-star"></i>
                                </a>
                              </td>
                              <td className="text-center width40">
                                <div className="avatar d-block">
                                  <img
                                    className="avatar"
                                    src="../assets/images/xs/avatar2.jpg"
                                    alt="avatar"
                                  />
                                </div>
                              </td>
                              <td>
                                <div>
                                  <a href="javascript:void(0);">
                                    Merri Diamond
                                  </a>
                                </div>
                                <div className="text-muted">+264-625-2583</div>
                              </td>
                              <td className="hidden-xs">
                                <div className="text-muted">
                                  <a
                                    href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="4a222f38272b24282f29210a23242c2564292527"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </div>
                              </td>
                              <td className="hidden-sm">
                                <div className="text-muted">
                                  455 S. Airport St. Moncks Corner, SC 29461
                                </div>
                              </td>
                              <td className="text-right">
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Phone"
                                >
                                  <i className="fa fa-phone"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Mail"
                                >
                                  <i className="fa fa-envelope"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link hidden-xs js-sweetalert"
                                  data-type="confirm"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Delete"
                                >
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr className="">
                              <td className="hidden-xs">
                                <a
                                  href="javascript:void(0);"
                                  className="mail-star love"
                                >
                                  <i className="fa fa-heart"></i>
                                </a>
                              </td>
                              <td className="text-center width40">
                                <div className="avatar d-block">
                                  <img
                                    className="avatar"
                                    src="../assets/images/xs/avatar3.jpg"
                                    alt="avatar"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="from">
                                  <a href="javascript:void(0);">Sara Hopkins</a>
                                </div>
                                <div className="text-muted">+264-625-3333</div>
                              </td>
                              <td className="hidden-xs">
                                <div className="text-muted">
                                  <a
                                    href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="1e737f6c677f7a7f736d5e77707871307d7173"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </div>
                              </td>
                              <td className="hidden-sm">
                                <div className="text-muted">
                                  19 Ohio St. Snellville, GA 30039
                                </div>
                              </td>
                              <td className="text-right">
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Phone"
                                >
                                  <i className="fa fa-phone"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Mail"
                                >
                                  <i className="fa fa-envelope"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link hidden-xs js-sweetalert"
                                  data-type="confirm"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Delete"
                                >
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr className="">
                              <td className="hidden-xs">
                                <a
                                  href="javascript:void(0);"
                                  className="mail-star active"
                                >
                                  <i className="fa fa-star"></i>
                                </a>
                              </td>
                              <td className="text-center width40">
                                <div className="avatar d-block">
                                  <img
                                    className="avatar"
                                    src="../assets/images/xs/avatar7.jpg"
                                    alt="avatar"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="from">
                                  <a href="javascript:void(0);">
                                    Andrew Patrick
                                  </a>
                                </div>
                                <div className="text-muted">+264-625-2586</div>
                              </td>
                              <td className="hidden-xs">
                                <div className="text-muted">
                                  <a
                                    href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="680501030d1c000105091b2801060e07460b0705"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </div>
                              </td>
                              <td className="hidden-sm">
                                <div className="text-muted">
                                  728 Blackburn St. Andover, MA 01810
                                </div>
                              </td>
                              <td className="text-right">
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Phone"
                                >
                                  <i className="fa fa-phone"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Mail"
                                >
                                  <i className="fa fa-envelope"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link hidden-xs js-sweetalert"
                                  data-type="confirm"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Delete"
                                >
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr className="">
                              <td className="hidden-xs">
                                <a
                                  href="javascript:void(0);"
                                  className="mail-star"
                                >
                                  <i className="fa fa-star"></i>
                                </a>
                              </td>
                              <td className="text-center width40">
                                <div className="avatar d-block">
                                  <img
                                    className="avatar"
                                    src="../assets/images/xs/avatar5.jpg"
                                    alt="avatar"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="from">
                                  <a href="javascript:void(0);">
                                    Claire Peters
                                  </a>
                                </div>
                                <div className="text-muted">+264-625-3333</div>
                              </td>
                              <td className="hidden-xs">
                                <div className="text-muted">
                                  <a
                                    href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="adcec1ccc4dfc8ddc8d9c8dfdeedc4c3cbc283cec2c0"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </div>
                              </td>
                              <td className="hidden-sm">
                                <div className="text-muted">
                                  19 Ohio St. Snellville, GA 30039
                                </div>
                              </td>
                              <td className="text-right">
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Phone"
                                >
                                  <i className="fa fa-phone"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Mail"
                                >
                                  <i className="fa fa-envelope"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link hidden-xs js-sweetalert"
                                  data-type="confirm"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Delete"
                                >
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr className="">
                              <td className="hidden-xs">
                                <a
                                  href="javascript:void(0);"
                                  className="mail-star"
                                >
                                  <i className="fa fa-star"></i>
                                </a>
                              </td>
                              <td className="text-center width40">
                                <div className="avatar d-block">
                                  <img
                                    className="avatar"
                                    src="../assets/images/xs/avatar6.jpg"
                                    alt="avatar"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="from">
                                  <a href="javascript:void(0);">
                                    Allen Collins
                                  </a>
                                </div>
                                <div className="text-muted">+264-625-4526</div>
                              </td>
                              <td className="hidden-xs">
                                <div className="text-muted">
                                  <a
                                    href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="e8838d8698899c9a818b83a881868e87c68b8785"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </div>
                              </td>
                              <td className="hidden-sm">
                                <div className="text-muted">
                                  728 Blackburn St. Andover, MA 01810
                                </div>
                              </td>
                              <td className="text-right">
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Phone"
                                >
                                  <i className="fa fa-phone"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Mail"
                                >
                                  <i className="fa fa-envelope"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link hidden-xs js-sweetalert"
                                  data-type="confirm"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Delete"
                                >
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr className="">
                              <td className="width35 hidden-xs">
                                <a
                                  href="javascript:void(0);"
                                  className="mail-star"
                                >
                                  <i className="fa fa-star"></i>
                                </a>
                              </td>
                              <td className="text-center width40">
                                <div className="avatar d-block">
                                  <img
                                    className="avatar"
                                    src="../assets/images/xs/avatar4.jpg"
                                    alt="avatar"
                                  />
                                </div>
                              </td>
                              <td>
                                <div>
                                  <a href="javascript:void(0);">
                                    Erin Gonzales
                                  </a>
                                </div>
                                <div className="text-muted">+264-625-1593</div>
                              </td>
                              <td className="hidden-xs">
                                <div className="text-muted">
                                  <a
                                    href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="eb8e9982858c8485918a878e98ab82858d84c5888486"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </div>
                              </td>
                              <td className="hidden-sm">
                                <div className="text-muted">
                                  455 S. Airport St. Moncks Corner, SC 29461
                                </div>
                              </td>
                              <td className="text-right">
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Phone"
                                >
                                  <i className="fa fa-phone"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Mail"
                                >
                                  <i className="fa fa-envelope"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link hidden-xs js-sweetalert"
                                  data-type="confirm"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Delete"
                                >
                                  <i className="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr className="">
                              <td className="hidden-xs">
                                <a
                                  href="javascript:void(0);"
                                  className="mail-star"
                                >
                                  <i className="fa fa-star"></i>
                                </a>
                              </td>
                              <td className="text-center width40">
                                <div className="avatar d-block">
                                  <img
                                    className="avatar"
                                    src="../assets/images/xs/avatar5.jpg"
                                    alt="avatar"
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="from">
                                  <a href="javascript:void(0);">Harry McCall</a>
                                </div>
                                <div className="text-muted">+264-625-2468</div>
                              </td>
                              <td className="hidden-xs">
                                <div className="text-muted">
                                  <a
                                    href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                                    className="__cf_email__"
                                    data-cfemail="6b181e18020e1c02070702182b02050d0445080406"
                                  >
                                    [email&#160;protected]
                                  </a>
                                </div>
                              </td>
                              <td className="hidden-sm">
                                <div className="text-muted">
                                  19 Ohio St. Snellville, GA 30039
                                </div>
                              </td>
                              <td className="text-right">
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Phone"
                                >
                                  <i className="fa fa-phone"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Mail"
                                >
                                  <i className="fa fa-envelope"></i>
                                </a>
                                <a
                                  className="btn btn-sm btn-link hidden-xs js-sweetalert"
                                  data-type="confirm"
                                  href="javascript:void(0)"
                                  data-toggle="tooltip"
                                  title="Delete"
                                >
                                  <i className="fa fa-trash"></i>
                                </a>
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
