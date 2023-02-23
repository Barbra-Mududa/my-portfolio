import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import {useState, useEffect} from 'react';
import { DarkModeSwitch } from "react-toggle-dark-mode";


function Navbar({ user, setUser}) {
  const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
    const body = document.querySelector('body');
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
  };

  const menu = () => {
    const links = document.querySelector('.middle-nav')
    const menu = document.querySelector('.menu')
    links.classList.toggle('active')
    menu.classList.toggle('clicked')
  }

  const aLink = () => {
    const links = document.querySelector('.middle-nav')
    const menu = document.querySelector('.menu')
    links.classList.remove('active')
    menu.classList.remove('clicked')
  }

  const myStyle= {
    marginTop: '0rem',
    position : "relative",
    right: "0.4rem"
  }

  return (
    <nav>
      <div className="nav-header">
        <NavLink to="/" id="header" onClick={aLink}>
          Barbra Mududa
        </NavLink>
      </div>

      <div className="middle-nav">
      <div className="container1-nav">     
        <NavLink to="/about" className="navlink" onClick={aLink}>About</NavLink>
        <NavLink to="/projects" className="navlink" onClick={aLink}>Project</NavLink>
        <NavLink to="/resume" className="navlink" onClick={aLink}>Resume</NavLink>
        <NavLink to="/contact" className="navlink" onClick={aLink}>Contact </NavLink>
        <DarkModeSwitch
        style={myStyle}
        checked={isDarkMode}
        onChange={toggleDarkMode}
        size={50}
       /> 
      </div>
      </div>
          
        <div className="menu" onClick={menu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
    </nav>
  );
}

export default Navbar;