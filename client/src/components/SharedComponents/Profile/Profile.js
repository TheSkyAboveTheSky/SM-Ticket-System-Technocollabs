import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Axios from "../Axios/Axios";
import Header from "../Header/Header";
import user from "../../../assets/images/user.png";
import dateFormat from "dateformat";
import { NotificationContainer } from "react-notifications";
import Modal from "react-modal";
import Notification from "../Notification/Notification";
import register from "../../../assets/images/register.webp";

function Profile() {
  //
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  //
  const [id, setId] = useState(window.localStorage.getItem("user-id"));
  //
  const [username, setUsername] = useState("None");
  const [team, setTeam] = useState("None");
  const [email, setEmail] = useState("None");
  const [birthDate, setBirthDate] = useState();
  const [addresse, setAddresse] = useState("None");
  const [nationality, setNationality] = useState("None");
  const [religion, setReligion] = useState("None");
  const [martialStatus, setMartialStatus] = useState("None");
  const [passportNumber, setPassportNumber] = useState("None");
  const [emergencyContact, setEmergencyContact] = useState("None");
  const [bankName, setBankName] = useState("None");
  const [accountNumber, setAccountNumber] = useState("None");
  const [IFSC, setIFSC] = useState("None");
  const [PAN, setPAN] = useState("None");
  const [UPI, setUPI] = useState("None");
  const [phone, setPhone] = useState("None");
  const [job, setJob] = useState("None");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const response = await Axios.get("/user/info/me", {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      });
      setUsername(response.data.username);
      setTeam(response.data.team);
      setEmail(response.data.email);
      setBirthDate(response.data.birthDate);
      setAddresse(response.data.addresse);
      setNationality(response.data.nationality);
      setReligion(response.data.religion);
      setMartialStatus(response.data.martialStatus);
      setPassportNumber(response.data.passportNumber);
      setEmergencyContact(response.data.emergencyContact);
      setBankName(response.data.bankName);
      setAccountNumber(response.data.accountNumber);
      setIFSC(response.data.IFSC);
      setPAN(response.data.PAN);
      setUPI(response.data.UPI);
      setPhone(response.data.phone);
      setJob(response.data.job);
    } catch (err) {
      console.log(err);
    }
  };
  const getUserPersonal = async () => {
    try {
      const response = await Axios.get("/user/info/me", {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      });
      setUsername(response.data.username);
      setTeam(response.data.team);
      setEmail(response.data.email);
      setBirthDate(response.data.birthDate);
      setAddresse(response.data.addresse);
      setNationality(response.data.nationality);
      setReligion(response.data.religion);
      setMartialStatus(response.data.martialStatus);
      setPassportNumber(response.data.passportNumber);
      setEmergencyContact(response.data.emergencyContact);
      setBankName(response.data.bankName);
      setAccountNumber(response.data.accountNumber);
      setIFSC(response.data.IFSC);
      setPAN(response.data.PAN);
      setUPI(response.data.UPI);
      setPhone(response.data.phone);
      setJob(response.data.job);
      openModal1();
    } catch (err) {
      console.log(err);
    }
  };
  const getUserBank = async () => {
    try {
      const response = await Axios.get("/user/info/me", {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      });
      setUsername(response.data.username);
      setTeam(response.data.team);
      setEmail(response.data.email);
      setBirthDate(response.data.birthDate);
      setAddresse(response.data.addresse);
      setNationality(response.data.nationality);
      setReligion(response.data.religion);
      setMartialStatus(response.data.martialStatus);
      setPassportNumber(response.data.passportNumber);
      setEmergencyContact(response.data.emergencyContact);
      setBankName(response.data.bankName);
      setAccountNumber(response.data.accountNumber);
      setIFSC(response.data.IFSC);
      setPAN(response.data.PAN);
      setUPI(response.data.UPI);
      setPhone(response.data.phone);
      setJob(response.data.job);
      openModal2();
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    const response = await Axios.put(
      `/user/${id}`,
      {
        username: username,
        team: team,
        email: email,
        birthDate: birthDate,
        addresse: addresse,
        nationality: nationality,
        religion: religion,
        martialStatus: martialStatus,
        passportNumber: passportNumber,
        emergencyContact: emergencyContact,
        bankName: bankName,
        accountNumber: accountNumber,
        IFSC: IFSC,
        PAN: PAN,
        UPI: UPI,
        phone: phone,
        job: job,
      },
      {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      }
    );
  };
  function openModal1() {
    setIsOpen1(true);
  }
  function closeModal1() {
    setIsOpen1(false);
  }
  function openModal2() {
    setIsOpen2(true);
  }
  function closeModal2() {
    setIsOpen2(false);
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
          <Header title={"User Profile"} />
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
                              {username}{" "}
                            </span>
                          </div>
                        </div>
                        <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
                          <h6 className="mb-0 mt-2  fw-bold d-block fs-6">
                            {username} {":"} {job}
                          </h6>
                          <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted"></span>
                          <div className="row g-2 pt-2">
                            <div className="col-xl-5">
                              <div className="d-flex align-items-center">
                                <i className="fa-solid fa-mobile-screen"></i>
                                <span className="ms-2 small">{phone}</span>
                              </div>
                            </div>
                            <div className="col-xl-5">
                              <div className="d-flex align-items-center">
                                <i className="fa-solid fa-envelope"></i>
                                <span className="ms-2 small">{email}</span>
                              </div>
                            </div>
                            <div className="col-xl-5">
                              <div className="d-flex align-items-center">
                                <i className="fa-solid fa-cake-candles"></i>
                                <span className="ms-2 small">
                                  {" "}
                                  {dateFormat(birthDate, "dddd, mmmm dS,yyyy")}
                                </span>
                              </div>
                            </div>
                            <div className="col-xl-5">
                              <div className="d-flex align-items-center">
                                <i className="fa-solid fa-address-book"></i>
                                <span className="ms-2 small">{addresse}</span>
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
                        <button
                          type="button"
                          className="btn p-0"
                          onClick={() => {
                            getUserPersonal();
                          }}
                        >
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
                              <span className="text-muted">{nationality}</span>
                            </div>
                          </li>
                          <li className="row flex-wrap mb-3">
                            <div className="col-6">
                              <span className="fw-bold">Team</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted">{team}</span>
                            </div>
                          </li>
                          <li className="row flex-wrap mb-3">
                            <div className="col-6">
                              <span className="fw-bold">Religion</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted">{religion}</span>
                            </div>
                          </li>
                          <li className="row flex-wrap mb-3">
                            <div className="col-6">
                              <span className="fw-bold">Marital Status</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted">
                                {martialStatus}
                              </span>
                            </div>
                          </li>
                          <li className="row flex-wrap mb-3">
                            <div className="col-6">
                              <span className="fw-bold">Passport No.</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted">
                                {passportNumber}
                              </span>
                            </div>
                          </li>
                          <li className="row flex-wrap">
                            <div className="col-6">
                              <span className="fw-bold">Emergency Contact</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted">
                                {emergencyContact}
                              </span>
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
                        <button
                          type="button"
                          className="btn p-0"
                          onClick={() => {
                            getUserBank();
                          }}
                        >
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
                              <span className="text-muted">{bankName}</span>
                            </div>
                          </li>
                          <li className="row flex-wrap mb-3">
                            <div className="col-6">
                              <span className="fw-bold">Account No.</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted">
                                {accountNumber}
                              </span>
                            </div>
                          </li>
                          <li className="row flex-wrap mb-3">
                            <div className="col-6">
                              <span className="fw-bold">IFSC Code</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted">{IFSC}</span>
                            </div>
                          </li>
                          <li className="row flex-wrap mb-3">
                            <div className="col-6">
                              <span className="fw-bold">Pan No</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted">{PAN}</span>
                            </div>
                          </li>
                          <li className="row flex-wrap">
                            <div className="col-6">
                              <span className="fw-bold">UPI Id</span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted">{UPI}</span>
                            </div>
                          </li>
                          <li className="row flex-wrap">
                            <div className="col-6">
                              <span className="fw-bold"> </span>
                            </div>
                            <div className="col-6">
                              <span className="text-muted"> </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <Modal
                  isOpen={isOpen1}
                  onRequestClose={closeModal1}
                  style={customStyles}
                  contentLabel="Update Modal"
                >
                  <div className="vh-600" style={{ backgroundColor: "white" }}>
                    <div className="container-fluid ">
                      <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                          <img
                            src={register}
                            alt="login form"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4">
                          <form onSubmit={() => updateUser()}>
                            <div className="text-center mb-3">
                              <h3 className="text-info">
                                Update User Personal Informations
                              </h3>
                            </div>
                            <div className="row g-3">
                              <div className="col-md-6 mb-3">
                                <label>Nationality</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Team"
                                  value={nationality}
                                  onChange={(e) =>
                                    setNationality(e.target.value)
                                  }
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <label>Team</label>
                                <select
                                  className="form-select"
                                  value={team}
                                  onChange={(e) => setTeam(e.target.value)}
                                >
                                  <option selected>Choose...</option>
                                  <option value="Team One">Team One</option>
                                  <option value="Team Two">Team Two</option>
                                  <option value="Team Three">Team Three</option>
                                </select>
                              </div>
                            </div>
                            <div className="row g-3">
                              <div className="col-md-6 mb-3">
                                <label>Religion</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Religion"
                                  value={religion}
                                  onChange={(e) => setReligion(e.target.value)}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <label>Marital Status</label>
                                <select
                                  className="form-select"
                                  value={martialStatus}
                                  onChange={(e) =>
                                    setMartialStatus(e.target.value)
                                  }
                                >
                                  <option selected>Choose...</option>
                                  <option value="Single">Single</option>
                                  <option value="Married">Married</option>
                                  <option value="Divorced">Divorced</option>
                                  <option value="Widowed">Widowed</option>
                                </select>
                              </div>
                            </div>
                            <div className="row g-3">
                              <div className="col-md-6 mb-3">
                                <label>Passport Number</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Passport Number"
                                  value={passportNumber}
                                  onChange={(e) =>
                                    setPassportNumber(e.target.value)
                                  }
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <label>Emergency Contact</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Emergency Contact"
                                  value={emergencyContact}
                                  onChange={(e) =>
                                    setEmergencyContact(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="row g-3">
                              <div className="col-md-6 mb-3">
                                <label>Phone</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Phone"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <label>Email</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>
                            </div>

                            <div className="row g-3">
                              <div className="col-md-6 mb-3">
                                <label>Birth Date</label>
                                <input
                                  type="date"
                                  className="form-control"
                                  placeholder="Birth Date"
                                  value={birthDate}
                                  onChange={(e) => setBirthDate(e.target.value)}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <label>Addresse</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Addresse"
                                  value={addresse}
                                  onChange={(e) => setAddresse(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="md-3">
                              <label>Job</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Job"
                                value={job}
                                onChange={(e) => setJob(e.target.value)}
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary w-40 my-3 mx-1"
                            >
                              Update
                            </button>
                            <button className="btn btn-danger w-40 my-3">
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
                <Modal
                  isOpen={isOpen2}
                  onRequestClose={closeModal2}
                  style={customStyles}
                  contentLabel="Update Modal"
                >
                  <div className="vh-600" style={{ backgroundColor: "white" }}>
                    <div className="container-fluid ">
                      <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                          <img
                            src={register}
                            alt="login form"
                            className="img-fluid"
                          />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4">
                          <form onSubmit={() => updateUser()}>
                            <div className="text-center mb-3">
                              <h3 className="text-info">
                                Update User Bank Informations
                              </h3>
                            </div>
                            <div className="row g-3">
                              <div className="col-md-6 mb-3">
                                <label>Bank Name</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Bank Name"
                                  value={bankName}
                                  onChange={(e) => setBankName(e.target.value)}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <label>Account Number</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  value={accountNumber}
                                  onChange={(e) =>
                                    setAccountNumber(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="row g-3">
                              <div className="col-md-6 mb-3">
                                <label>IFSC Number</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="IFSC Number"
                                  value={IFSC}
                                  onChange={(e) => setIFSC(e.target.value)}
                                />
                              </div>
                              <div className="col-md-6 mb-3">
                                <label>PAN Number</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="PAN Number"
                                  value={PAN}
                                  onChange={(e) => setPAN(e.target.value)}
                                />
                              </div>
                            </div>
                            <div className="md-3">
                              <label>UPI ID</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="UPI ID"
                                value={UPI}
                                onChange={(e) => setUPI(e.target.value)}
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary w-40 my-3 mx-1"
                            >
                              Update
                            </button>
                            <button className="btn btn-danger w-40 my-3">
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
        </div>
      </>
    </div>
  );
}

export default Profile;
