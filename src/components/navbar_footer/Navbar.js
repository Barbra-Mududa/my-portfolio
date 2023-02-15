import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css"


function Navbar() {
    
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
            {/* <div className='darkmode'>

            </div> */}
      </div>
    </div>
  )
}

export default Navbar