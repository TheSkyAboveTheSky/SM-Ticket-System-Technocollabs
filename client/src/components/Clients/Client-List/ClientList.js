import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../Header/Header';

function ClientList() {
  return (
    <div>
      <>
        <div>
          <Sidebar />
        </div>
        <div className="cont">
          <Header title={"Client List"} />
          <div>
            <ul className="nav nav-tabs page-header-tab ">
              <li className="nav-item">
                <a
                  style={
                    window.location.pathname === "/Client-List"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  className={
                    window.location.pathname === "/client-List"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  data-toggle="tab"
                  href="/Client-List"
                >
                  Client List
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={
                    window.location.pathname === "/add-Client"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  style={
                    window.location.pathname === "/add-Client"
                      ? { borderTop: "3px solid red" }
                      : { color: "grey" }
                  }
                  data-toggle="tab"
                  href="/add-Client"
                >
                  Add Client
                </a>
              </li>
            </ul>
          </div>
          <h1>Client List</h1>
        </div>
      </>
    </div>
  )
}

export default ClientList