import React from 'react'
import './project.css'

function Project() {
  return (
    <div className='projectContainer'>
      <div className='project-section'>
        <div className='project-heading'>
          <h2>My Projects</h2>
        </div>
        <div className='project-cards'>
          <h3>Projects</h3>
        </div>
        <div className='technologies'>
          <h3>TECHNOLOGIES I USED TO BUILD STUFF</h3>
          <div className='tech-icons'>
             <img id='tech1' 
                src='https://www.datocms-assets.com/45470/1631110818-logo-react-js.png' 
                alt=''
              />
              <img id='tech1' 
                src='https://cdn-icons-png.flaticon.com/512/5968/5968267.png' 
                alt=''
              />
              <img id='tech1' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' 
                alt=''
              />
              <img id='tech1' 
                src='https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png' 
                alt=''
              />
              <img id='tech1' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png' 
                alt=''
              />
              <img id='tech1' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' 
                alt=''
              />
            <div>
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
        </div>
        <div className='stacks'>
          <h3> My Stacks</h3>
          {/* <div>

          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Project