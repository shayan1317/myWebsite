import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
function Navbar() {
  return (
    <div className="app__navbar">
      <div className="app__navbar-content container1">
        <ul className="app__navbar-menu-links">
          <li>
            <Link to="header" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="clients" smooth={true} duration={500}>
              Clients
            </Link>
          </li>
          <li>
            <Link to="clientsGet" smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="workflow" smooth={true} duration={500}>
              Workflow
            </Link>
          </li>
          <li>
            <Link to="shout" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
