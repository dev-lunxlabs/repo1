import React, { useState } from "react";
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="navigation">
          <div className="nav-logo">
            <p>LUNX LABS</p>
          </div>

          <div className=" navigation-menu" >
            <ul className="flex">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">How it works?</a>
              </li>
              <li>
                <a href="#">Talent Pool</a>
              </li>
              <li>
                <a href="#">Vwtting Process</a>
              </li>
              <li>
                <a href="#">Case Study</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
