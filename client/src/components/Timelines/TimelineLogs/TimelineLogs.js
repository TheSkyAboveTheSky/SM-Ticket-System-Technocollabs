import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";

function TimelineLogs() {
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <Header title={"Timeline Logs"} />
          <div>
            <ul className="nav nav-tabs page-header-tab ">
              <li className="nav-item">
                <a
                  style={
                    window.location.pathname === "/Timeline-Logs"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  className={
                    window.location.pathname === "/Timeline-Logs"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-toggle="tab"
                  href="/Timeline-Logs"
                >
                  Timeline Logs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    window.location.pathname === "/Timeline-Task"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  style={
                    window.location.pathname === "/Timeline-Task"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  data-toggle="tab"
                  href="/Timeline-Task"
                >
                  Timeline Tasks
                </a>
              </li>
            </ul>
          </div>
          <h1>Timeline Logs</h1>
        </div>
      </>
    </div>
  );
}

export default TimelineLogs;
