import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

export const NavBar = () => {

  return (
    <header className="nav-bar">
      <img src="" alt="bars logo" />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/write">Write</NavLink>
      <NavLink to="/perform">Perform</NavLink>
    </header>
  );
};

export default NavBar;