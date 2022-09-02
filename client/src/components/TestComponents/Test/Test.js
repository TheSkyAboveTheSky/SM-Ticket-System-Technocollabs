import React, { useEffect, useState } from "react";
import Sidebar from "../../SharedComponents/Sidebar/Sidebar";
import Header from "../../SharedComponents/Header/Header";
import Axios from "../../SharedComponents/Axios/Axios";
import user from "../../../assets/images/user.png";

function Test() {
  const [chats, setChats] = useState([]);
  const [loggedUser , setLoggedUser] = useState('');
  useEffect(() => {
    getChats();
    setLoggedUser(window.localStorage.getItem('user-id'));
  }, []);
  const getChats = async () => {
    try {
      const response = await Axios.get("/chat", {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      });
      console.log(response.data);
      setChats(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <Header title={"Test"} />
          <div className="section-body mt-3">
            <div className="page">
              <div className="section-light py-3 chat_app">
                <div className="chat_list section-white" id="users">
                  <a className="chat_list_btn float-right">
                    <i className="fa  fa-window-close"></i>
                  </a>
                  <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="users-tab"
                        data-toggle="tab"
                        href="#users-list"
                        role="tab"
                        aria-controls="users-list"
                        aria-selected="true"
                      >
                        Users
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="groups-tab"
                        data-toggle="tab"
                        href="#groups"
                        role="tab"
                        aria-controls="groups"
                        aria-selected="false"
                      >
                        Groups
                      </a>
                    </li>
                  </ul>
                  <div className="input-group mt-2 mb-2">
                    <input
                      type="text"
                      className="form-control search"
                      placeholder="Search..."
                    />
                  </div>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="users-list"
                      role="tabpanel"
                      aria-labelledby="users-tab"
                    >
                      <ul
                        className="right_chat list-unstyled list"
                        style={{ textDecoration: "none" }}
                      >
                        {chats.map((chat, index) => {
                          let chatName;
                          if (!chat.isGroupChat) {
                            if (
                              chat.users[0]._id ===
                              window.localStorage.getItem("user-id")
                            ) {
                              chatName = chat.users[1].username;
                            } else {
                              chatName = chat.users[0].username;
                            }
                          }
                          let sender;
                          if (chat.latestMessage.sender._id === loggedUser)
                          {
                            sender = "You"
                          }else{
                            sender = chat.latestMessage.sender.username;
                          }
                            return (
                              <li className="online">
                                <div className="media">
                                  <img
                                    className="media-object"
                                    src={user}
                                    alt=""
                                  />
                                  <div className="media-body">
                                    <span className="name">{chatName}</span>
                                    <span className="message">
                                      {sender}
                                      {" : "}
                                      {chat.latestMessage.text}
                                    </span>
                                    <span className="badge badge-outline status"></span>
                                  </div>
                                </div>
                              </li>
                            );
                        })}
                      </ul>
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

export default Test;
