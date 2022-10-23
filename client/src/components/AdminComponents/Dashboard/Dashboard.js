import React, { useEffect, useState } from "react";
import Header from "../../SharedComponents/Header/Header";
import Sidebar from "../../SharedComponents/Sidebar/Sidebar";
import Axios from "../../SharedComponents/Axios/Axios";
import userImg from "../../../assets/images/user.png";
import Notification from "../../SharedComponents/Notification/Notification";
import User from "./Users";
import { NotificationContainer } from "react-notifications";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [role, setRole] = useState("");
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await Axios.get("/user", {
      headers: { "x-auth-token": window.localStorage.getItem("x-auth-token") },
    });
    setUsers(response.data);
  };
  const getUser = async (id) => {
    const response = await Axios.get(`/user/${id}`, {
      headers: { "x-auth-token": window.localStorage.getItem("x-auth-token") },
    });
    setId(id);
    console.log(response.data);
  };
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.put(
        `/user/${id}`,
        {
          roles: role,
        },
        {
          headers: {
            "x-auth-token": window.localStorage.getItem("x-auth-token"),
          },
        }
      );
      await Notification("success", "Successufly Updating the User Roles");
      window.location.reload();
    } catch (err) {
      Notification("error", err);
    }
  };
  const deleteUser = async (e) => {
    e.preventDefault();
    alert(id);
    try {
      const response = await Axios.delete(`/user/${id}`, {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      });
      await Notification("success", "Successufly deleted the User");
    } catch (err) {
      Notification("error", err);
    }
    window.location.reload();
  };
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className="cont">
        <Header title={"Dashboard"} />
        <>
          <NotificationContainer />
          <div className="section-body mt-3">
            <div className="container-fluid">
              <div className="row clearfix">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-md-flex justify-content-between mb-2">
                        <ul className="nav nav-tabs b-none">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              data-toggle="tab"
                              href="/Client-List"
                            >
                              <i className="fa fa-list-ul"></i> Users List
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-body">
            <div className="container-fluid">
              <div className="tab-content">
                <div className="row clearfix">
                  {users.map((user) => {
                    let userRole = "";
                    switch (user.roles) {
                      case "0000":
                        userRole = "UnAuthorized";
                        break;
                      case "1010":
                        userRole = "Client";
                        break;
                      case "2020":
                        userRole = "Employee";
                        break;
                      case "3030":
                        userRole = "Project Manager";
                        break;
                      case "4040":
                        userRole = "Admin";
                        break;
                    }
                    return (
                      <User userRole={userRole} userImg={userImg} email={user.email} username={user.username} updateUser={updateUser} id={user._id} deleteUser={deleteUser} getUser={getUser} setRole={setRole}/>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
}

export default Dashboard;
