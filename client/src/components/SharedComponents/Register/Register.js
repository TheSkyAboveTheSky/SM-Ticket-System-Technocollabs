import React,{useState} from "react";
import register from '../../../assets/images/register.webp';
import Axios from '../Axios/Axios';
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Notification from "../Notification/Notification";

function Registre() {
  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");

  const createUser = async (e) => {
    e.preventDefault();
    try{
      const response = await Axios.post('/user',{
        email: email,
        username: userName,
        password: password,
      })
      try{
        const mail = await Axios.post('/send-mail',{
          to : email,
          subject : "Welcome to Our Application",
          text : "Welcome to our application : you can log in now to your Account!"
        })
      }catch(err){
        console.error(err);
      }
      await Notification("success","Welcome to our application successfully");
      window.location.href = "/login";
    }catch(err){
      console.log(err);
      Notification("error","An error occurred while creating Your Account");
    }

  }
  return (
    <div className="vh-600 banner" >
      <NotificationContainer />
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
            <form onSubmit={createUser}>
              <div className="text-center mb-3">
                <p>Sign Up:</p>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>

              <p className="text-center">or :</p>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="FullName"
                />
                <label>Full Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <label>Username</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repeat Password"
                />
                <label>Repeat Password</label>
              </div>

              <div className="col-md-12 d-flex justify-content-center">
                <div className="form-check mb-3 mb-md-0">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label">
                    {" "}
                    I have Already Read and Agreed to the Terms{" "}
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100 my-3">
                Sign Up
              </button>
              <div className="text-center">
                <p>
                  Already a member?{" "}
                  <a href="/login" style={{ textDecoration: "none" }}>
                    Login in
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registre;
