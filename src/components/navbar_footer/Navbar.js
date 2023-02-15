import React from 'react';
import { NavLink } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import {useState, useEffect} from 'react';

import "./navbar.css"


function Navbar() {
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

  return ( 
    <div className='navbar'>
      <div className='nav-section'>
            <div className='logo'>
                <NavLink exact to= "/" id='logos'>Barbra Mududa</NavLink>
            </div>
            <nav>
                <NavLink to= "/about" id='links'>About</NavLink>
                <NavLink to= "/projects" id='links'>Project</NavLink>
                <NavLink to= "/resume" id='links'>Resume</NavLink>
                <NavLink to= "/contact" id='links'>Contact</NavLink>
            </nav>
            <DarkModeSwitch
                style={{ marginBottom: '2rem' }}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={120}
            />
      </div>
    </div>
  )
}

export default Navbar