import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Header from "../../Header/Header";

function TicketList() {
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <Header title={"Ticket List"} />
          <div>
            <ul className="nav nav-tabs page-header-tab ">
              <li className="nav-item">
                <a
                  style={
                    window.location.pathname === "/Ticket-List"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  className={
                    window.location.pathname === "/Ticket-List"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-toggle="tab"
                  href="/Ticket-List"
                >
                  Ticket List
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    window.location.pathname === "/add-Ticket"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  style={
                    window.location.pathname === "/add-Ticket"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  data-toggle="tab"
                  href="/add-Ticket"
                >
                  Add Ticket
                </a>
              </li>
            </ul>
          </div>
          <h1>Ticket List</h1>
        </div>
      </>
    </div>
  );
}

export default TicketList;
