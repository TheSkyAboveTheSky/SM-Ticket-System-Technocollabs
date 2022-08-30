import React, { useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";
import user from "../../../assets/images/user.png";
import Axios from "../../Axios/Axios";
import banner from "../../../assets/images/banner.jpg";
import Notification from "../../Notification/Notification";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

function AddTodo() {
  const [title, setTitle] = useState("");
  const [due, setDue] = useState();
  const [team, setTeam] = useState("");
  const [priority, setPriority] = useState("");

  const createTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        "/todo",
        {
          title: title,
          due: due,
          team: team,
          priority: priority,
        },
        {
          headers: {
            "x-auth-token": window.localStorage.getItem("x-auth-token"),
          },
        }
      );
      try {
        const users = await Axios.get("/user", {
          headers: {
            "x-auth-token": window.localStorage.getItem("x-auth-token"),
          },
        });
        const array = users.data;
        array.forEach(async (user, index) => {
          if (user.team === team) {
            try {
              const subResponse = await Axios.post(
                "/timeline",
                {
                  user: user._id,
                  body: `You have been added as a member of the ${team} team to the Todo: ${title}`,
                  type: "Tasks",
                },
                {
                  headers: {
                    "x-auth-token": window.localStorage.getItem("x-auth-token"),
                  },
                }
              );
            } catch (err) {
              console.log(err);
              Notification(
                "error",
                "Something went wrong when adding the todo"
                );
              }
            }
          });
          await Notification("success", "Successufly adding the Todo");
          window.location.reload();
      } catch (err) {
        console.error(err);
        Notification("error", "Something went wrong when adding the todo");
      }
    } catch (err) {
      console.error(err);
      Notification("error", "Something went wrong when adding the todo");
    }
  };

  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <NotificationContainer />
          <Header title={"Add Todos"} />
          <div>
            <ul className="nav nav-tabs page-header-tab ">
              <li className="nav-item">
                <a
                  style={
                    window.location.pathname === "/todo-list"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  className={
                    window.location.pathname === "/todo-list"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-toggle="tab"
                  href="/todo-list"
                >
                  Todo List
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    window.location.pathname === "/add-Todo"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  style={
                    window.location.pathname === "/add-Todo"
                      ? { borderTop: "3px solid blue" }
                      : { color: "grey" }
                  }
                  data-toggle="tab"
                  href="/add-Todo"
                >
                  Add Todos
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
                  <form onSubmit={createTodo}>
                    <div className="text-center mb-3">
                      <h3 classname="text-info">Todos</h3>
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <label>Title</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Date"
                        onChange={(e) => setDue(e.target.value)}
                      />
                      <label>Due</label>
                    </div>

                    <div className="row g-3">
                      <div className="col-md-6 form-floating mb-3">
                        <select
                          className="form-select"
                          onChange={(e) => setTeam(e.target.value)}
                        >
                          <option selected>Choose...</option>
                          <option value="Team One">Team One</option>
                          <option value="Team Two">Team Two</option>
                          <option value="Team Three">Team Three</option>
                        </select>
                        <label>Team</label>
                      </div>
                      <div className="col-md-6 form-floating mb-3">
                        <select
                          className="form-select"
                          onChange={(e) => setPriority(e.target.value)}
                        >
                          <option selected>Choose...</option>
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                        </select>
                        <label>Priority</label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-100 my-3"
                    >
                      Create Todo
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

export default AddTodo;
