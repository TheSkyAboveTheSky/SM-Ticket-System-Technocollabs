import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from '../Header/Header';
import TimelineLogs from '../Timelines/TimelineLogs/TimelineLogs';
import './Home.css';
function Home() {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className="cont">
        <Header  title={"Dashboard"}/>
      </div>
    </>
  );
}

export default Home;
