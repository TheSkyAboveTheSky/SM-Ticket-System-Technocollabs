import React, { useEffect, useState } from "react";
import Header from "../../SharedComponents/Header/Header";
import Sidebar from "../../SharedComponents/Sidebar/Sidebar";
import Axios from "../../SharedComponents/Axios/Axios";
import userImg from "../../../assets/images/user.png";
import Notification from "../../SharedComponents/Notification/Notification";
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
    const response = await Axios.get(`/user/${id}`,{
      headers : { "x-auth-token": window.localStorage.getItem("x-auth-token")},
    })
    setId(id);
    console.log(response.data);
  };
  const updateUser = async (e) => {
    e.preventDefault();
    alert(id);
    alert(role);
    try{
      const response = await Axios.put(`/user/${id}`,{
        roles : role,
      }, {
        headers : {"x-auth-token": window.localStorage.getItem("x-auth-token")},
      })
      await Notification("success","Successufly Updating the User Roles");
      window.location.reload();
    }catch(err){
      Notification("error",err);
    }
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
                    switch(user.roles) {
                      case "0000" :
                        userRole = "UnAuthorized";
                        break;
                      case "1010" :
                        userRole = "Client";
                        break;
                      case "2020" :
                        userRole = "Employee";
                        break;
                      case "3030" :
                        userRole = "Project Manager";
                        break;
                      case "4040" :
                        userRole = "Admin";
                        break;
                    }
                    return (
                      <div className="col-xl-4 col-lg-4 col-md-6">
                        <div className="card">
                          <div className="card-body text-center ribbon">
                            <div className="ribbon-box green">{userRole}</div>
                            <img
                              className="rounded-circle img-thumbnail w100"
                              src={userImg}
                              alt=""
                            />
                            <h6 className="mt-3 mb-0">{user.username}</h6>
                            <span>
                              <a className="__cf_email__">{user.email}</a>
                            </span>
                            <div className="row text-center mt-4">
                              <form onSubmit={updateUser} >
                                <div className="form-group">
                                  <label>Role :</label>
                                  <select 
                                    className="form-select" 
                                    onChange={ (e) => setRole(e.target.value) }
                                    onClick={ () => getUser(user._id) }
                                  >
                                    <option defaultValue>Select a Role</option>
                                    <option value="0000">UnAuthorized</option>
                                    <option value="1010">Client</option>
                                    <option value="2020">Employee</option>
                                    <option value="3030">Project Manager</option>
                                    <option value="4040">Admin</option>
                                  </select>
                                </div>
                                <button type="submit" className="btn btn-sm w-100" style={{color:'darkblue'}}><i className="fa fa-pen-to-square"></i> Assign Role</button>
                              </form>
                              <a
                                className="btn btn-sm"
                                style={{ color: "red" }}
                              >
                                <i className="fa fa-trash"></i> Delete
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
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
