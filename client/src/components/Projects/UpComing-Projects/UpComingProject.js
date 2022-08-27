import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";

function UpComingProject() {
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <Header title={"UpComing Projects"} />
          <div>
            <ul className="nav nav-tabs page-header-tab ">
              <li className="nav-item">
                <a
                  style={
                    window.location.pathname === "/ongoing-Project"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  className={
                    window.location.pathname === "/ongoing-Project"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-toggle="tab"
                  href="/ongoing-Project"
                >
                  OnGoing Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    window.location.pathname === "/upcoming-Project"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  style={
                    window.location.pathname === "/upcoming-Project"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  data-toggle="tab"
                  href="/upcoming-Project"
                >
                  UpComing Projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={
                    window.location.pathname === "/completed-Project"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  className={
                    window.location.pathname === "/completed-Project"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-toggle="tab"
                  href="/completed-Project"
                >
                  Completed Project
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={
                    window.location.pathname === "/add-Project"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  className={
                    window.location.pathname === "/add-Project"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-toggle="tab"
                  href="/add-Project"
                >
                  Add Project
                </a>
              </li>
            </ul>
          </div>
          <h1>UpComing Project</h1>
        </div>
      </>
    </div>
  );
}

export default UpComingProject;
