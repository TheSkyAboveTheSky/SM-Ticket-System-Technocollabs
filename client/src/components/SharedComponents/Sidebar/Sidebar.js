import React from "react";
import "./Sidebar.css";
import "../../../assets/css/main.min.css";
import user from "../../../assets/images/user.png";
import Logout from "../../../auth/Logout";

function Sidebar() {
  const role = window.localStorage.getItem("user-roles");
  switch (role) {
    case "2020":
      return (
        <>
          <div id="header_top" className="header_top">
            <div className="container">
              <div className="hleft">
                <a
                  style={
                    window.location.pathname === "/"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/"
                      ? "header-brand active"
                      : "header-brand"
                  }
                  href="/"
                >
                  <i className="fa fa-house brand-logo"></i>
                </a>
                <a
                  href="/"
                  style={
                    window.location.pathname === "/"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <img className="avatar" src={user} alt="" />
                </a>
                <a
                  href="/ongoing-Project"
                  style={
                    window.location.pathname === "/ongoing-Project" || window.location.pathname === "/upcoming-Project" || window.location.pathname === "/completed-Project"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/ongoing-Project" || window.location.pathname === "/upcoming-Project" || window.location.pathname === "/completed-Project"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa-solid fa-folder-closed"></i>
                </a>
                <a
                  href="/Taskboard"
                  style={
                    window.location.pathname === "/Taskboard"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/Taskboard"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa fa-thumbtack"></i>
                </a>
                <a
                  href="/Ticket-List"
                  style={
                    window.location.pathname === "/Ticket-List"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/Ticket-List"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa fa-ticket"></i>
                </a>
                <a
                  href="/Timeline-Task"
                  style={
                    window.location.pathname === "/Timeline-Task" || window.location.pathname ==="/Timeline-Logs"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/Timeline-Task" || window.location.pathname ==="/Timeline-Logs"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa-solid fa-timeline"></i>
                </a>
                <a
                  href="/todo-list"
                  style={
                    window.location.pathname === "/todo-list"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/todo-list"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa-solid fa-bars"></i>
                </a>
                <a
                  href="/chat"
                  style={
                    window.location.pathname === "/chat"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/chat"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa-solid fa-message"></i>
                </a>
              </div>
              <div className="hright">
                <div className="dropdown">
                  <a className="nav-link icon settingbar" onClick={Logout}>
                    <i
                      className="fa-solid fa-right-from-bracket"
                      data-toggle="tooltip"
                      data-placement="right"
                    ></i>
                  </a>
                  <a className="nav-link icon settingbar">
                    <i
                      className="fa fa-gear fa-spin"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Settings"
                    ></i>
                  </a>
                  <a className="nav-link icon menu_toggle">
                    <i className="fa  fa-align-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="left-sidebar" className="sidebar">
            <h5 className="brand-name">
              SM <a href="/" className="menu_option float-right"></a>
            </h5>
            <nav id="left-sidebar-nav" className="sidebar-nav">
              <ul className="metismenu">
                <li className="g_heading">Project</li>
                <li className="active">
                  <a
                    href="/"
                    style={
                      window.location.pathname === "/"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-dashboard"></i>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/Timeline-Task"
                    style={
                      window.location.pathname === "/Timeline-Task" ||
                      window.location.pathname === "/Timeline-Logs"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/Timeline-Task" ||
                      window.location.pathname === "/Timeline-Logs"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-timeline"></i>
                    <span>Timeline</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/ongoing-Project"
                    style={
                      window.location.pathname === "/ongoing-Project" ||
                      window.location.pathname === "/upcoming-Project" ||
                      window.location.pathname === "/completed-Project"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/ongoing-Project" ||
                      window.location.pathname === "/upcoming-Project" ||
                      window.location.pathname === "/completed-Project"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-folder-closed"></i>
                    <span>Projects</span>
                  </a>
                </li>
                <li className="g_heading">Taskboard</li>
                <li className="active">
                  <a
                    href="/Taskboard"
                    style={
                      window.location.pathname === "/Taskboard"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/Taskboard"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-thumbtack"></i>
                    <span>Taskboard</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/todo-list"
                    style={
                      window.location.pathname === "/todo-list"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/todo-list"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-list-check"></i>
                    <span>Todos List</span>
                  </a>
                </li>
                <li className="g_heading">Tickets</li>
                <li className="active">
                  <a
                    href="/Ticket-List"
                    style={
                      window.location.pathname === "/Ticket-List"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/Ticket-List"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-ticket"></i>
                    <span>Tickets</span>
                  </a>
                </li>
                <li className="g_heading">Chat</li>
                <li className="active">
                  <a
                    href="/chat"
                    style={
                      window.location.pathname === "chat"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/chat"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-message"></i>
                    <span>Messages</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </>
      );
    case "3030":
      return (
        <>
          <div id="header_top" className="header_top">
            <div className="container">
              <div className="hleft">
                <a
                  style={
                    window.location.pathname === "/"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/"
                      ? "header-brand active"
                      : "header-brand"
                  }
                  href="/"
                >
                  <i className="fa fa-house brand-logo"></i>
                </a>
                <a
                  href="/"
                  style={
                    window.location.pathname === "/"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <img className="avatar" src={user} alt="" />
                </a>
                <a
                  href="/ongoing-Project"
                  style={
                    window.location.pathname === "/ongoing-Project" || window.location.pathname === "/upcoming-Project" || window.location.pathname === "/completed-Project" || window.location.pathname === "/add-Project"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/ongoing-Project" || window.location.pathname === "/upcoming-Project" || window.location.pathname === "/completed-Project" || window.location.pathname === "/add-Project"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa-solid fa-folder-closed"></i>
                </a>
                <a
                  href="/Taskboard"
                  style={
                    window.location.pathname === "/Taskboard" || window.location.pathname === "/add-Task"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/Taskboard" || window.location.pathname === "/add-Task"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa fa-thumbtack"></i>
                </a>
                <a
                  href="/Ticket-List"
                  style={
                    window.location.pathname === "/Ticket-List"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/Ticket-List"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa fa-ticket"></i>
                </a>
                <a
                  href="/Timeline-Task"
                  style={
                    window.location.pathname === "/Timeline-Task" || window.location.pathname ==="/Timeline-Logs"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/Timeline-Task" || window.location.pathname ==="/Timeline-Logs"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa-solid fa-timeline"></i>
                </a>
                <a
                  href="/todo-list"
                  style={
                    window.location.pathname === "/todo-list"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/todo-list"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa-solid fa-bars"></i>
                </a>
                <a
                  href="/chat"
                  style={
                    window.location.pathname === "/chat"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/chat"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa-solid fa-message"></i>
                </a>
              </div>
              <div className="hright">
                <div className="dropdown">
                  <a className="nav-link icon settingbar" onClick={Logout}>
                    <i
                      className="fa-solid fa-right-from-bracket"
                      data-toggle="tooltip"
                      data-placement="right"
                    ></i>
                  </a>
                  <a className="nav-link icon settingbar">
                    <i
                      className="fa fa-gear fa-spin"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Settings"
                    ></i>
                  </a>
                  <a className="nav-link icon menu_toggle">
                    <i className="fa  fa-align-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="left-sidebar" className="sidebar">
            <h5 className="brand-name">
              SM <a href="/" className="menu_option float-right"></a>
            </h5>
            <nav id="left-sidebar-nav" className="sidebar-nav">
              <ul className="metismenu">
                <li className="g_heading">Project</li>
                <li className="active">
                  <a
                    href="/"
                    style={
                      window.location.pathname === "/"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-dashboard"></i>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/Timeline-Task"
                    style={
                      window.location.pathname === "/Timeline-Task" ||
                      window.location.pathname === "/Timeline-Logs"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/Timeline-Task" ||
                      window.location.pathname === "/Timeline-Logs"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-timeline"></i>
                    <span>Timeline</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/ongoing-Project"
                    style={
                      window.location.pathname === "/ongoing-Project" ||
                      window.location.pathname === "/upcoming-Project" ||
                      window.location.pathname === "/completed-Project"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/ongoing-Project" ||
                      window.location.pathname === "/upcoming-Project" ||
                      window.location.pathname === "/completed-Project"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-folder-closed"></i>
                    <span>Projects</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/add-Project"
                    style={
                      window.location.pathname === "/add-Project"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/add-Project"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-circle-plus"></i>
                    <span>Add Projects</span>
                  </a>
                </li>
                <li className="g_heading">Taskboard</li>
                <li className="active">
                  <a
                    href="/Taskboard"
                    style={
                      window.location.pathname === "/Taskboard"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/Taskboard"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-thumbtack"></i>
                    <span>Taskboard</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/add-Task"
                    style={
                      window.location.pathname === "/add-Task"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/add-Task"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-circle-plus"></i>
                    <span>Add Tasks</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/todo-list"
                    style={
                      window.location.pathname === "/todo-list"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/todo-list"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-list-check"></i>
                    <span>Todos List</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/add-Todo"
                    style={
                      window.location.pathname === "/add-Todo"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/add-Todo"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-circle-plus"></i>
                    <span>Add Todos</span>
                  </a>
                </li>
                <li className="g_heading">Tickets</li>
                <li className="active">
                  <a
                    href="/Ticket-List"
                    style={
                      window.location.pathname === "/Ticket-List"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/Ticket-List"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-ticket"></i>
                    <span>Tickets</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/add-Ticket"
                    style={
                      window.location.pathname === "/add-Ticket"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/add-Ticket"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-circle-plus"></i>
                    <span>Add Tickets</span>
                  </a>
                </li>
                <li className="g_heading">Chat</li>
                <li className="active">
                  <a
                    href="/chat"
                    style={
                      window.location.pathname === "chat"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/chat"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-message"></i>
                    <span>Messages</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </>
      );
    case "4040":
      return (
        <>
          <div id="header_top" className="header_top">
            <div className="container">
              <div className="hleft">
                <a
                  style={
                    window.location.pathname === "/"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/"
                      ? "header-brand active"
                      : "header-brand"
                  }
                  href="/"
                >
                  <i className="fa fa-house brand-logo"></i>
                </a>
                <a
                  href="/"
                  style={
                    window.location.pathname === "/"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <img className="avatar" src={user} alt="" />
                </a>
                <a
                  href="/Client-List"
                  style={
                    window.location.pathname === "/Client-List" || window.location.pathname === "/add-Client"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/Client-List" || window.location.pathname === "/add-Client"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa fa-users"></i>
                </a>
                <a
                  href="/ongoing-Project"
                  style={
                    window.location.pathname === "/ongoing-Project" || window.location.pathname === "/upcoming-Project" || window.location.pathname === "/completed-Project" || window.location.pathname === "/add-Project"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/ongoing-Project" || window.location.pathname === "/upcoming-Project" || window.location.pathname === "/completed-Project" || window.location.pathname === "/add-Project"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa-solid fa-folder-closed"></i>
                </a>
                <a
                  href="/Taskboard"
                  style={
                    window.location.pathname === "/Taskboard" || window.location.pathname === "/add-Task"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/Taskboard" || window.location.pathname === "/add-Task"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa fa-thumbtack"></i>
                </a>
                <a
                  href="/Ticket-List"
                  style={
                    window.location.pathname === "/Ticket-List"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/Ticket-List"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa fa-ticket"></i>
                </a>
                <a
                  href="/Timeline-Task"
                  style={
                    window.location.pathname === "/Timeline-Task" || window.location.pathname ==="/Timeline-Logs"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/Timeline-Task" || window.location.pathname === "/Timeline-Logs"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa-solid fa-timeline"></i>
                </a>
                <a
                  href="/todo-list"
                  style={
                    window.location.pathname === "/todo-list"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/todo-list"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa-solid fa-bars"></i>
                </a>
                <a
                  href="/chat"
                  style={
                    window.location.pathname === "/chat"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/chat"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa-solid fa-message"></i>
                </a>
              </div>
              <div className="hright">
                <div className="dropdown">
                  <a className="nav-link icon settingbar" onClick={Logout}>
                    <i
                      className="fa-solid fa-right-from-bracket"
                      data-toggle="tooltip"
                      data-placement="right"
                    ></i>
                  </a>
                  <a className="nav-link icon settingbar">
                    <i
                      className="fa fa-gear fa-spin"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Settings"
                    ></i>
                  </a>
                  <a className="nav-link icon menu_toggle">
                    <i className="fa  fa-align-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="left-sidebar" className="sidebar">
            <h5 className="brand-name">
              SM <a href="/" className="menu_option float-right"></a>
            </h5>
            <nav id="left-sidebar-nav" className="sidebar-nav">
              <ul className="metismenu">
                <li className="g_heading">Project</li>
                <li className="active">
                  <a
                    href="/"
                    style={
                      window.location.pathname === "/"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-dashboard"></i>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/Timeline-Task"
                    style={
                      window.location.pathname === "/Timeline-Task" ||
                      window.location.pathname === "/Timeline-Logs"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/Timeline-Task" ||
                      window.location.pathname === "/Timeline-Logs"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-timeline"></i>
                    <span>Timeline</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/ongoing-Project"
                    style={
                      window.location.pathname === "/ongoing-Project" ||
                      window.location.pathname === "/upcoming-Project" ||
                      window.location.pathname === "/completed-Project"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/ongoing-Project" ||
                      window.location.pathname === "/upcoming-Project" ||
                      window.location.pathname === "/completed-Project"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-folder-closed"></i>
                    <span>Projects</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/add-Project"
                    style={
                      window.location.pathname === "/add-Project"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/add-Project"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-circle-plus"></i>
                    <span>Add Projects</span>
                  </a>
                </li>
                <li className="g_heading">Taskboard</li>
                <li className="active">
                  <a
                    href="/Taskboard"
                    style={
                      window.location.pathname === "/Taskboard"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/Taskboard"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-thumbtack"></i>
                    <span>Taskboard</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/add-Task"
                    style={
                      window.location.pathname === "/add-Task"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/add-Task"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-circle-plus"></i>
                    <span>Add Tasks</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/todo-list"
                    style={
                      window.location.pathname === "/todo-list"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/todo-list"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-list-check"></i>
                    <span>Todos List</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/add-Todo"
                    style={
                      window.location.pathname === "/add-Todo"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/add-Todo"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-circle-plus"></i>
                    <span>Add Todos</span>
                  </a>
                </li>
                <li className="g_heading">Tickets</li>
                <li className="active">
                  <a
                    href="/Ticket-List"
                    style={
                      window.location.pathname === "/Ticket-List"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/Ticket-List"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-ticket"></i>
                    <span>Tickets</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/add-Ticket"
                    style={
                      window.location.pathname === "/add-Ticket"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/add-Ticket"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-circle-plus"></i>
                    <span>Add Tickets</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/Client-List"
                    style={
                      window.location.pathname === "/Client-List"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/Client-List"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-users"></i>
                    <span>Clients</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/add-Client"
                    style={
                      window.location.pathname === "/add-Client"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/add-Client"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-circle-plus"></i>
                    <span>Add Clients</span>
                  </a>
                </li>
                <li className="g_heading">Chat</li>
                <li className="active">
                  <a
                    href="/chat"
                    style={
                      window.location.pathname === "chat"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/chat"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-message"></i>
                    <span>Messages</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </>
      );
    default:
      return (
        <>
          <div id="header_top" className="header_top">
            <div className="container">
              <div className="hleft">
                <a
                  style={
                    window.location.pathname === "/"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/"
                      ? "header-brand active"
                      : "header-brand"
                  }
                  href="/"
                >
                  <i className="fa fa-house brand-logo"></i>
                </a>
                <a
                  href="/"
                  style={
                    window.location.pathname === "/"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <img className="avatar" src={user} alt="" />
                </a>
                <a
                  href="/Timeline-Task"
                  style={
                    window.location.pathname === "/Timeline-Task" || window.location.pathname === "/Timeline-Logs"
                      ? { color: "red" }
                      : { color: "black" }
                  }
                  className={
                    window.location.pathname === "/Timeline-Task" || window.location.pathname === "/Timeline-Logs"
                      ? "nav-link icon xs-hide active"
                      : "nav-link icon xs-hide"
                  }
                >
                  <i className="fa-solid fa-timeline"></i>
                </a>
              </div>
              <div className="hright">
                <div className="dropdown">
                  <a className="nav-link icon settingbar" onClick={Logout}>
                    <i
                      className="fa-solid fa-right-from-bracket"
                      data-toggle="tooltip"
                      data-placement="right"
                    ></i>
                  </a>
                  <a className="nav-link icon settingbar">
                    <i
                      className="fa fa-gear fa-spin"
                      data-toggle="tooltip"
                      data-placement="right"
                      title="Settings"
                    ></i>
                  </a>
                  <a className="nav-link icon menu_toggle">
                    <i className="fa  fa-align-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="left-sidebar" className="sidebar">
            <h5 className="brand-name">
              SM <a href="/" className="menu_option float-right"></a>
            </h5>
            <nav id="left-sidebar-nav" className="sidebar-nav">
              <ul className="metismenu">
                <li className="g_heading">Project</li>
                <li className="active">
                  <a
                    href="/"
                    style={
                      window.location.pathname === "/"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-dashboard"></i>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className="active">
                  <a
                    href="/Timeline-Task"
                    style={
                      window.location.pathname === "/Timeline-Task" ||
                      window.location.pathname === "/Timeline-Logs"
                        ? { color: "red" }
                        : { color: "black" }
                    }
                    className={
                      window.location.pathname === "/Timeline-Task" ||
                      window.location.pathname === "/Timeline-Logs"
                        ? "header-brand active"
                        : "header-brand"
                    }
                  >
                    <i className="fa fa-timeline"></i>
                    <span>Timeline</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </>
      );
  }
}

export default Sidebar;
