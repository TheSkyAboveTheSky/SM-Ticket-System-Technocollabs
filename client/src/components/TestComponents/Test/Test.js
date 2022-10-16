import React, { useEffect, useState } from "react";
import Sidebar from "../../SharedComponents/Sidebar/Sidebar";
import Header from "../../SharedComponents/Header/Header";
import Axios from "../../SharedComponents/Axios/Axios";
import user from "../../../assets/images/user.png";

function Test() {
  useEffect(() => {}, []);

  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <Header title={"Test"} />
          <div className="section-body mt-3">
            <div className="body d-flex py-lg-3 py-md-2">
              <div className="container-xxl">
                <div className="row clearfix">
                  <div className="col-md-12">
                    <div className="card border-0 mb-4 no-bg">
                      <div className="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
                        <h1 className="fw-bold flex-fill mb-0">Profile</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-xl-8 col-lg-12 col-md-12">
                    <div className="card teacher-card  mb-3">
                      <div className="card-body  d-flex teacher-fulldeatil">
                        <div className="profile-teacher pe-xl-4 pe-md-2 pe-sm-4 pe-0 text-center w220 mx-sm-0 mx-auto">
                          <a href="#">
                            <img
                              src={user}
                              alt=""
                              className="avatar xl rounded-circle img-thumbnail shadow-sm"
                            />
                          </a>
                          <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                            <h6 className="mb-0 fw-bold d-block fs-6"></h6>
                            <span className="text-muted small">
                              Employee {" "}
                            </span>
                          </div>
                        </div>
                        <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
                          <h6 className="mb-0 mt-2  fw-bold d-block fs-6"></h6>
                          <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted"></span>
                          <p className="mt-2 small text-justify"></p>
                          <div className="row g-2 pt-2">
                            <div className="col-xl-5">
                              <div className="d-flex align-items-center">
                                <i className="fa-solid fa-mobile-screen"></i>
                                <span className="ms-2 small"></span>
                              </div>
                            </div>
                            <div className="col-xl-5">
                              <div className="d-flex align-items-center">
                                <i className="fa-solid fa-envelope"></i>
                                <span className="ms-2 small"></span>
                              </div>
                            </div>
                            <div className="col-xl-5">
                              <div className="d-flex align-items-center">
                                <i className="fa-solid fa-cake-candles"></i>
                                <span className="ms-2 small"></span>
                              </div>
                            </div>
                            <div className="col-xl-5">
                              <div className="d-flex align-items-center">
                                <i className="fa-solid fa-address-book"></i>
                                <span className="ms-2 small"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-3">
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="card">
                      <div className="card-header py-3 d-flex justify-content-between">
                        <h3 className="mb-0 fw-bold ">Personal Informations</h3>
                        <button type="button" className="btn p-0">
                          <i className="fa-solid fa-pen-to-square text-primary fs-6"></i>
                        </button>
                      </div>
                      <div className="card-body">
                        <ul className="list-unstyled mb-0">
                          <li className="row flex-wrap mb-3">
                            <div className="col-6">
                              <span className="fw-bold">Nationality</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted"></span>
                            </div>
                          </li>
                          <li className="row flex-wrap mb-3">
                            <div className="col-6">
                              <span className="fw-bold">Religion</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted"></span>
                            </div>
                          </li>
                          <li className="row flex-wrap mb-3">
                            <div className="col-6">
                              <span className="fw-bold">Marital Status</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted"></span>
                            </div>
                          </li>
                          <li className="row flex-wrap mb-3">
                            <div className="col-6">
                              <span className="fw-bold">Passport No.</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted"></span>
                            </div>
                          </li>
                          <li className="row flex-wrap">
                            <div className="col-6">
                              <span className="fw-bold">Emergency Contact</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted"></span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                    <div className="card">
                      <div className="card-header py-3 d-flex justify-content-between">
                        <h3 className="mb-0 fw-bold ">Bank information</h3>
                        <button type="button" className="btn p-0">
                          <i className="fa-solid fa-pen-to-square text-primary fs-6"></i>
                        </button>
                      </div>
                      <div className="card-body">
                        <ul className="list-unstyled mb-0">
                          <li className="row flex-wrap mb-3">
                            <div className="col-6">
                              <span className="fw-bold">Bank Name</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted"></span>
                            </div>
                          </li>
                          <li className="row flex-wrap mb-3">
                            <div className="col-6">
                              <span className="fw-bold">Account No.</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted"></span>
                            </div>
                          </li>
                          <li className="row flex-wrap mb-3">
                            <div className="col-6">
                              <span className="fw-bold">IFSC Code</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted"></span>
                            </div>
                          </li>
                          <li className="row flex-wrap mb-3">
                            <div className="col-6">
                              <span className="fw-bold">Pan No</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted"></span>
                            </div>
                          </li>
                          <li className="row flex-wrap">
                            <div className="col-6">
                              <span className="fw-bold">UPI Id</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted"></span>
                            </div>
                          </li>
                        </ul>
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
