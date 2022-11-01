import React, { useEffect, useState } from "react";
import Sidebar from "../../../SharedComponents/Sidebar/Sidebar";
import Header from "../../../SharedComponents/Header/Header";
import user from "../../../../assets/images/user.png";
import Axios from "../../../SharedComponents/Axios/Axios";
import banner from "../../../../assets/images/banner.jpg";
import dateFormat from "dateformat";
import {
  NotificationContainer,
} from "react-notifications";
import Notification from "../../../SharedComponents/Notification/Notification";
import Modal from "react-modal";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [due, setDue] = useState();
  const [team, setTeam] = useState("");
  const [priority, setPriority] = useState("");
  const [id,setId] = useState("");

  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = async () => {
    const response = await Axios.get("/todo", {
      headers: { "x-auth-token": window.localStorage.getItem("x-auth-token") },
    });
    setTodos(response.data);
  };
  const deleteTodo = async (id) => {
    try {
      const response = await Axios.delete(`/todo/${id}`, {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      });
      Notification("success", "Successufly deleting the todo");
      window.location.reload();
    } catch (err) {
      Notification("error", err.message);
    }
  };
  const updateTodo = async () => {
    try {
      const response = await Axios.put(
        `/todo/${id}`,
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
      Notification("success", "Successufly updating the todo");
      closeModal();
      window.location.reload();
    } catch (err) {
      Notification("error", err.message);
    }
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
    },
  };
  const getTodo = async (id) => {
    const response = await Axios.get(`/todo/${id}`, {
      headers: { "x-auth-token": window.localStorage.getItem("x-auth-token") },
    });
    console.log(response.data);
    setDue(response.data.due);
    setPriority(response.data.priority);
    setTeam(response.data.team);
    setTitle(response.data.title);
    setId(id);
    openModal();
  };
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <Header title={"Todo"} />
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
          <NotificationContainer />
          <div className="section-body mt-3">
            <div className="container-fluid">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="todo-list"
                  role="tabpanel"
                >
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive todo_list">
                        <table className="table table-hover table-striped table-vcenter mb-0 text-nowrap">
                          <thead>
                            <tr>
                              <th></th>
                              <th className="w150 text-right">Due</th>
                              <th className="w100">Team</th>
                              <th className="w100">Priority</th>
                              <th className="w80">
                                <i className="fa fa-user"></i>
                              </th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {todos.map((todo) => {
                              let styleTag;
                              switch (todo.priority) {
                                case "Low":
                                  styleTag = "tag tag-green";
                                  break;
                                case "Medium":
                                  styleTag = "tag tag-yellow";
                                  break;
                                case "High":
                                  styleTag = "tag tag-red";
                                  break;
                              }
                              return (
                                <tr>
                                  <td>
                                    <label className="custom-control custom-checkbox">
                                      <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        style={{ width: "2rem" }}
                                      />
                                      <span
                                        className="custom-control-label"
                                        style={{
                                          fontSize: "1rem",
                                          color: "black",
                                        }}
                                      >
                                        {todo.title}
                                      </span>
                                    </label>
                                  </td>
                                  <td className="text-right">
                                    {dateFormat(todo.due, "dd-mm-yyyy")}
                                  </td>
                                  <td className="text-right">{todo.team}</td>
                                  <td>
                                    <span className={styleTag}>
                                      {todo.priority}
                                    </span>
                                  </td>
                                  <td>
                                    <img
                                      src={user}
                                      alt="Avatar"
                                      className="avatar"
                                    />
                                  </td>
                                  <td>
                                    <a
                                      className="btn btn-sm"
                                      style={{ color: "red", margin: "1rem" }}
                                      onClick={() => {
                                        deleteTodo(todo._id);
                                      }}
                                    >
                                      <i className="fa fa-trash"></i>
                                    </a>
                                    <a
                                      className="btn btn-sm"
                                      style={{ color: "blue" }}
                                      onClick={() => {
                                        getTodo(todo._id);
                                      }}
                                    >
                                      <i className="fa fa-pen-to-square"></i>
                                    </a>
                                  </td>
                                  <Modal
                                    isOpen={isOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Update Modal"
                                  >
                                    <div
                                      className="vh-600"
                                      style={{ backgroundColor: "white" }}
                                    >
                                      <div className="container-fluid ">
                                        <div className="row d-flex justify-content-center align-items-center h-100">
                                          <div className="col-md-9 col-lg-6 col-xl-5">
                                            <img
                                              src={banner}
                                              alt="login form"
                                              className="img-fluid"
                                            />
                                          </div>
                                          <div className="col-md-8 col-lg-6 col-xl-4">
                                            <form
                                              onSubmit={() =>
                                                updateTodo()
                                              }
                                            >
                                              <div className="text-center mb-3">
                                                <h3 className="text-info">
                                                  Todos
                                                </h3>
                                              </div>

                                              <div className="mb-3">
                                                <label>Title :</label>
                                                <input
                                                  type="text"
                                                  className="form-control"
                                                  value={title}
                                                  onChange={(e) =>
                                                    setTitle(e.target.value)
                                                  }
                                                />
                                              </div>
                                              <div className="mb-3">
                                                <label>
                                                  Due : Format (DD-MM-YYYY)
                                                </label>
                                                <input
                                                  type="date"
                                                  className="form-control"
                                                  value={due}
                                                  onChange={(e) =>
                                                    setDue(e.target.value)
                                                  }
                                                />
                                              </div>

                                              <div className="row g-3">
                                                <div className="col-md-6 mb-3">
                                                  <label>Team :</label>

                                                  <select
                                                    className="form-select"
                                                    value={team}
                                                    onChange={(e) =>
                                                      setTeam(e.target.value)
                                                    }
                                                  >
                                                    <option selected>
                                                      Choose...
                                                    </option>
                                                    <option value="Team One">
                                                      Team One
                                                    </option>
                                                    <option value="Team Two">
                                                      Team Two
                                                    </option>
                                                    <option value="Team Three">
                                                      Team Three
                                                    </option>
                                                  </select>
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                  <label>Priority :</label>

                                                  <select
                                                    className="form-select"
                                                    value={priority}
                                                    onChange={(e) =>
                                                      setPriority(
                                                        e.target.value
                                                      )
                                                    }
                                                  >
                                                    <option selected>
                                                      Choose...
                                                    </option>
                                                    <option value="Low">
                                                      Low
                                                    </option>
                                                    <option value="Medium">
                                                      Medium
                                                    </option>
                                                    <option value="High">
                                                      High
                                                    </option>
                                                  </select>
                                                </div>
                                              </div>

                                              <button
                                                type="submit"
                                                className="btn btn-primary w-40 my-3 mx-1"
                                              >
                                                Update Todo
                                              </button>
                                              <button
                                                className="btn btn-danger w-40 my-3"
                                                onClick={() => closeModal()}
                                              >
                                                Close
                                              </button>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Modal>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Todo;
