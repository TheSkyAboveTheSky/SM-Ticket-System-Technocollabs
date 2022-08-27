import React from "react";
import register from '../../assets/images/register.webp';
function Registre() {
  return (
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
            <form>
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
                />
                <label>Username</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <label>Email address</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
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
