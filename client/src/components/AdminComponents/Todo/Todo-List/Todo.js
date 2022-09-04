import React, { useEffect, useState } from "react";
import Sidebar from "../../../SharedComponents/Sidebar/Sidebar";
import Header from "../../../SharedComponents/Header/Header";
import user from "../../../../assets/images/user.png";
import Axios from "../../../SharedComponents/Axios/Axios";
import dateFormat from "dateformat";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import Notification from '../../../SharedComponents/Notification/Notification';

function Todo() {
  const [todos, setTodos] = useState([]);
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
    try{
      const response = await Axios.delete(`/todo/${id}`,{headers : {'x-auth-token' : window.localStorage.getItem('x-auth-token')}});
      Notification("success","Successufly deleting the todo");
      window.location.reload();
    }catch(err){
      Notification("error",err.message);
    }
  }
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
                                      <span className="custom-control-label" style={{ fontSize:'1rem' , color: 'black'}}>
                                        {todo.title}
                                      </span>
                                    </label>
                                  </td>
                                  <td className="text-right">{dateFormat(todo.due,'dd-mm-yyyy')}</td>
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
                                    <a className="btn btn-sm" style={{color: "red"}} onClick={() => { deleteTodo(todo._id)}}
                                    >
                                      <i className="fa fa-trash"></i>
                                    </a>
                                  </td>
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
