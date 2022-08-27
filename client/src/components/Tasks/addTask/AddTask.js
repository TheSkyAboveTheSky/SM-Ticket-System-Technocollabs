import React from "react";
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';

function AddTask() {
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <Header title={"Add Task"} />
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
          <h1>Add Tasks</h1>
        </div>
      </>
    </div>
  );
}

export default AddTask;
