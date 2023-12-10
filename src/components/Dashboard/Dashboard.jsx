import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import Playbar from "../Playbar/Playbar";
import "./styles.scss";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="side-bar">
          <Navbar />
          <Sidebar />
        </div>
        <div className="content-bar">
          <div className="scollar custom-scrollbar">
            <Content />
          </div>
        </div>
      </div>
      <Playbar />
    </div>
  );
}
