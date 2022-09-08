import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import login from "../../../assets/images/login.svg";
import Axios from "../Axios/Axios";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Notification from "../Notification/Notification";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/auth/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("x-auth-token", response.data.token);
      localStorage.setItem("user-id", response.data.user.id);
      localStorage.setItem("user-roles", response.data.user.roles);
      try {
        const subResponse = await Axios.post("/timeline", {
          user: response.data.user.id,
          type: "Logs",
          body: "You have been logged in successfully to your Account",
        });
      } catch (err) {
        console.log(err);
      }
      await Notification(
        "success",
        "You've logged in successfully to your Account"
      );
      window.location.href="/";
    } catch (err) {
      console.log(err);
      Notification("error", "Something went wrong");
    }
  };
  return (
    <div className="vh-100" style={{ backgroundColor: "white"}}>
      <NotificationContainer />
      <div className="container-fluid ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={login} alt="login form" className="img-fluid" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4">
            <form onSubmit={loginHandler}>
              <div className="text-center mb-3">
                <p>Sign in with:</p>
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

              <div className="row g-2">
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="form-check mb-3 mb-md-0">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label"> Remember me </label>
                  </div>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                  <a href="#" style={{ textDecoration: "none" }}>
                    Forgot password?
                  </a>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100 my-3">
                Sign In
              </button>
              <div className="text-center">
                <p>
                  Not a member?{" "}
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default Login;
