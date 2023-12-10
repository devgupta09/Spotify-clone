import React from "react";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import {
  IoChevronBackOutline,
  IoChevronForwardOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import "./styles.scss";

export default function Header() {
  return (
    <div className="header">
      <div className="header-navigation">
        <span className="header-button">
          <IoChevronBackOutline size={20} className="icon" />
        </span>
        <span className="header-button">
          <IoChevronForwardOutline size={20} className="icon" />
        </span>
      </div>
      <div className="header-functions">
        <button className="subscription">Explore Premium</button>
        <button className="download">
          <MdOutlineDownloadForOffline size={20} className="icon" />
          Install App
        </button>
        <span className="header-button">
          <IoNotificationsOutline size={20} className="icon" />
        </span>
        <span className="header-button">
          <AiOutlineUser size={20} className="icon" />
        </span>
      </div>
    </div>
  );
}
