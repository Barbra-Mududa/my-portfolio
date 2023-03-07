import React from 'react'
import './project.css'
import ProjectCard from './ProjectCard'
import Stacks from './Stacks'

function Project() {
  const iconStyle = {
    fontSize: '4rem',
    marginLeft: '5rem',
    marginTop: '20px'
  }

  return (
    <div className='projectContainer'>
      <div className='project-section'>
        <div className='projects'>
          <h2>My Projects & Collaborations</h2>
          <ProjectCard/>
        </div>
        <div className='technologies'>
          <h3>Technologies I Use</h3>
          <div className='tech-icons'>
            <div className='group1'>
              <div id='tech'>
                <i class="fa fa-html5" aria-hidden="true" style={iconStyle}></i>
                <h4>HTML5</h4>
              </div>
              <div id='tech'>
                <i class="fa fa-css3" aria-hidden="true" style={iconStyle}></i>
                <h4>CSS</h4>
              </div>
              <div id='tech'>
                <i class="fa-brands fa-react" style={iconStyle}></i>  
                <h4>REACT</h4>
              </div>
              <div id='tech'>
                <i class="fa-brands fa-bootstrap" style={iconStyle}></i>               
               <h4>BOOOTSTRAP</h4>
              </div>
              <div id='tech'>
                <img src='https://i.postimg.cc/dtPSL0qG/image-33.jpg' className='tailwind'/>
                <h4>TAILWIND</h4>
              </div>
            </div>
            <div className='group2'>
              <div id='tech1'>
                <img src='https://i.postimg.cc/YSxwD4tH/image-34.jpg' className='tailwind'/>
                <h4>RUBY</h4>
              </div>
              <div id='tech1'>
                <img src='https://i.postimg.cc/V6LPxYNb/image-35.jpg' className='tailwind'/>
                <h4>RAILS</h4>
              </div>
              <div id='tech1'>
                <img src='https://i.postimg.cc/xCxVYWkp/image-36.jpg' className='tailwind'/>
              </div>
            </div>
          </div>
        </div>
        <div className='stacks'>
          <h3> My Stacks</h3>
          <Stacks />
        </div>
      </div>
    </div>
  )
}

export default Project