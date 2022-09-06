import React,{useState} from "react";
import Sidebar from "../../../SharedComponents/Sidebar/Sidebar";
import Header from "../../../SharedComponents/Header/Header";
import Axios from '../../../SharedComponents/Axios/Axios';
import banner from '../../../../assets/images/banner.jpg';
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Notification from '../../../SharedComponents/Notification/Notification';

function AddClient() {
  const [fullName,setFullName] = useState("");
  const [country,setCountry] = useState("");
  const [address,setAddress] = useState("");
  const [email,setEmail] = useState("");
  const [project,setProject] = useState(0);
  const [deal,setDeal] = useState(0);
  const [facebook,setFacebook] = useState("");
  const [instagram,setInstagram] = useState("");
  const [twitter,setTwitter] = useState("");
  const [slack,setSlack] = useState("");
  const [github,setGithub] = useState("");
  const [linkedIn,setLinkedIn] = useState("");

  const createClient = async () => {
    try{
      const response = await Axios.post('/client',{
        fullName : fullName,
        country : country,
        address : address,
        email : email,
        projects : project,
        deal : deal,
        twitter : twitter,
        slack : slack,
        github : github,
        linkedin : linkedIn,
        instagram : instagram,
        facebook : facebook,
      },{headers : {'x-auth-token' : window.localStorage.getItem('x-auth-token')}})
      Notification('success',"Successufly creating The Client");
    }catch(err){
      console.error(err);
      Notification('error',"Something went wrong");
    }
  }
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <NotificationContainer />
          <Header title={"Add Client"} />
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
          <div className="vh-600" style={{ backgroundColor: "white" }}>
            <div className="container-fluid ">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <img src={banner} alt="login form" className="img-fluid" />
                </div>
                <div className="col-md-8 col-lg-6 col-xl-4">
                  <form onSubmit={createClient}>
                    <div className="text-center mb-3">
                      <h3 className="text-info">Add Clients</h3>
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="FullName"
                          onChange={(e) => setFullName(e.target.value)}
                        />
                        <label>Full Name</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Country"
                          onChange={(e) => setCountry(e.target.value)}
                        />
                        <label>Country</label>
                      </div>
                    </div>
                    <div className="row g-3">
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Address"
                          onChange={(e) => setAddress(e.target.value)}
                        />
                        <label>Address</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Email</label>
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
                          onChange={(e) => setProject(e.target.value)}
                        />
                        <label>Project</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <input
                          type="Number"
                          className="form-control"
                          placeholder="Deal"
                          min="0"
                          step="1"
                          onChange={(e) => setDeal(e.target.value)}
                        />
                        <label>Deal</label>
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Facebook"
                          onChange={(e) => setFacebook(e.target.value)}
                        />
                        <label>Facebook</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Instagram"
                          onChange={(e) => setInstagram(e.target.value)}
                        />
                        <label>Instagram</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Twitter"
                          onChange={(e) => setTwitter(e.target.value)}
                        />
                        <label>Twitter</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Slack"
                          onChange={(e) => setSlack(e.target.value)}
                        />
                        <label>Slack</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Github"
                          onChange={(e) => setGithub(e.target.value)}
                        />
                        <label>Github</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="LinkedIn"
                          onChange={(e) => setLinkedIn(e.target.value)}
                        />
                        <label>LinkedIn</label>
                      </div>
                    <button
                      type="submit"
                      className="btn btn-primary w-100 my-3"
                    >
                      Create Client
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default AddClient;
