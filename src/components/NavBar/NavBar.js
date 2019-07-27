import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <header className="nav-bar">
      <img
        className="nav-bar-logo"
        src="./images/barzLogo.svg"
        alt="bars logo"
      />
      <nav className="nav-bar-links-wrapper">
        <NavLink activeClassName="active" className="nav-bar-link" exact to="/">
          Home
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-bar-link"
          exact
          to="/write"
        >
          Write
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-bar-link"
          exact
          to="/perform"
        >
          Perform
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
