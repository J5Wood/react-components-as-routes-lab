import React from 'react';
import { NavLink } from 'react-router-dom';

const linkStyle = {
  width: "125px",
  padding: "15px",
  margin: '0 6px 6px',
  background: "purple",
  textDecoration: "none",
  color: "black"
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink 
        to="/"
        exact
        style={linkStyle}
        activeStyle={{
          color: "pink",
          background: "black"
        }}
      >Home</NavLink>

      <NavLink 
        to="/movies"
        exact
        style={linkStyle}
        activeStyle={{
          color: "pink",
          background: "black"
        }}
      >Movies</NavLink>

      <NavLink 
        to="/directors"
        exact
        style={linkStyle}
        activeStyle={{
          color: "pink",
          background: "black"
        }}
      >Directors</NavLink>

      <NavLink 
        to="/actors"
        exact
        style={linkStyle}
        activeStyle={{
          color: "pink",
          background: "black"
        }}
      >Actors</NavLink>
        
    </div>
  );
};

export default NavBar;
