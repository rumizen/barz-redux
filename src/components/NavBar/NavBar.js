import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <header className="nav-bar">
      <NavLink activeClassName="active" className="nav-bar-logo-wrapper" exact to="/">
        <img
          className="nav-bar-logo"
          src="./images/barzLogo.svg"
          alt="bars logo"
        />
      </NavLink>
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
          to="/help"
        >
          Help
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
