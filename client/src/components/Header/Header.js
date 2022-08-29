import React from "react";
import "../../assets/css/main.min.css";

function Header(props) {
  return (
    <>
      <div id="page_top" className="section-body top_dark">
        <div className="container-fluid">
          <div className="page-header">
            <div className="left">
              <a href="javascript:void(0)" className="icon menu_toggle mr-3">
                <i className="fa  fa-align-left"></i>
              </a>
              <h1 className="page-title mx-2">{props.title}</h1>
            </div>
            <div className="right">
              <div className="input-icon xs-hide mr-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for..."
                />
                <span className="input-icon-addon">
                  <i className="fa fa-search"></i>
                </span>
              </div>
              <div className="d-flex">
                <div className="dropdown d-flex">
                  <a
                    className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-language"></i>
                  </a>
                </div>
                <div className="dropdown d-flex">
                  <a
                    className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-envelope"></i>
                    <span className="badge badge-success nav-unread"></span>
                  </a>
                </div>
                <div className="dropdown d-flex">
                  <a
                    className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-bell"></i>
                    <span className="badge badge-primary nav-unread"></span>
                  </a>
                </div>
                <div className="dropdown d-flex">
                  <a
                    className="nav-link icon d-none d-md-flex btn btn-default btn-icon ml-2"
                    data-toggle="dropdown"
                  >
                    <i className="fa fa-user"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
