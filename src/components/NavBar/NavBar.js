import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = () => {

  return (
    <header className="nav-bar">
      <img className="nav-bar-logo" src="./images/logo.svg" alt="bars logo" />
      <nav className="nav-bar-links-wrapper">
        <NavLink className="nav-bar-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-bar-link" to="/write">
          Write
        </NavLink>
        <NavLink className="nav-bar-link" to="/perform">
          Perform
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;