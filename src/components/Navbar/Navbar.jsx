import React from "react";
import { GoSearch, GoHomeFill } from "react-icons/go";
import "./styles.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <GoHomeFill size={25} />
          Home
        </li>
        <li>
          <GoSearch size={25} />
          Search
        </li>
      </ul>
    </div>
  );
}
