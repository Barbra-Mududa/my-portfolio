import React from 'react'
import './project.css'
import ProjectCard from './ProjectCard'

function Project() {
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
             <img id='tech1' 
                src='https://www.datocms-assets.com/45470/1631110818-logo-react-js.png' 
                alt=''
              />
              <img id='tech1' className='three-icons'
                src='https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png' 
                alt=''
              />
              <img id='tech1' 
                src='https://i.postimg.cc/W4JpB1B4/image-5-3.jpg' 
                alt=''
              />
              <img id='tech1' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' 
                alt=''
              />
              <img id='tech' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1200px-Ruby_logo.svg.png' 
                alt=''
              />
              <img id='tech' 
                src='https://atlantictech.io/wp-content/uploads/2022/08/cfcd3-ruby2.png' 
                alt=''
              />
              <img id='tech' 
                src='https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png'
                alt=''
              />
          </div>
        </div>
        {/* <div className='stacks'>
          <h3> My Stacks</h3>
        </div> */}
      </div>
    </div>
  )
}

export default Project