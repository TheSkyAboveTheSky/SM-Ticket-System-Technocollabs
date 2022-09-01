import React, { useEffect, useState } from "react";
import Axios from "../../Axios/Axios";
import user from "../../../assets/images/user.png";
import { ChatState } from '../../../Context/ChatProvider';

function ChatDisc() {

  const { selectedChat , setSelectedChat , user , chats , setChats , id ,setId } = ChatState();
  const [messages, setMessages] = useState([]);
  let chatName = "";
  if (selectedChat) {
    if (!selectedChat.isGroupChat && selectedChat.users) {
      if (selectedChat.users[0]._id === user) {
        chatName = selectedChat.users[1].username;
      } else {
        chatName = selectedChat.users[0].username;
      }
    }
  }
  let chatID;

  useEffect(() => {
    if(selectedChat){
      chatID = selectedChat._id;
      getMessages(chatID);
    }
  },[selectedChat]);
  const getMessages = async (wow) => {
    try{
      const response = await Axios.get(`/message/${wow}`, {
        headers: {
          "x-auth-token": window.localStorage.getItem("x-auth-token"),
        },
      });
      console.log("response :",response.data);
      setMessages(response.data);
    }catch(err){
      console.log("Error :");
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="card bg-none b-none">
              <div className="card-header bline bg-none">
                <h3 className="card-title">
                  { chats && messages && chatName}
                  <small>Last seen: 2 hours ago</small>
                </h3>
                <div className="card-options">
                  <a href="javascript:void(0)" className="p-1">
                    <i className="fa fa-plus"></i>
                  </a>
                  <a href="javascript:void(0)" className="p-1">
                    <i className="fa fa-cog"></i>
                  </a>
                  <a href="javascript:void(0)" className="p-1">
                    <i className="fa fa-refresh"></i>
                  </a>
                  <a href="javascript:void(0)" className="p-1 chat_list_btn">
                    <i className="fa fa-align-right"></i>
                  </a>
                </div>
              </div>
              <div className="chat_windows">
                <ul className="mb-0">
                  { chats && (messages.length > 0) && messages.map((message) => {
                    let senderTag = "";
                    let senderMessageTag = "";
                    console.log("Messa : ",message);
                    if(message){
                      if (user === message.sender._id) {
                        senderTag = "my-message";
                        senderMessageTag = "bg-light-gray";
                      } else {
                        senderTag = "other-message";
                        senderMessageTag = "bg-light-blue";
                      }
                    }
                    return (
                      <li className={senderTag}>
                        <div className="message">
                          <p className={senderMessageTag}>Are we meeting today?</p>
                          <span className="time">10:10 AM, Today</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="chat-message clearfix">
                  <a
                    href="javascript:void(0);"
                    data-toggle="modal"
                    data-target="#addtask"
                  >
                    <i className="icon-camera"></i>
                  </a>
                  <a href="javascript:void(0);">
                    <i className="icon-camcorder"></i>
                  </a>
                  <a href="javascript:void(0);">
                    <i className="icon-paper-plane"></i>
                  </a>
                  <div className="input-group mb-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter text here..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatDisc;
