import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='homeContainer'>
      <div>
        <div>
          <h2>About Me...</h2>
          <h4>A young enthusiastic software developer who aspires to <br></br>
              build interactive and practical platforms that will <br></br>
              address current challenges.
          </h4>
        </div>
        <div>
          <h3>Education</h3>
          <div>
            {/* <Card/> */}
          </div>
        </div>
        <div>
          <h3>My Reads</h3>
          <div>
            <ul>
              <li>
                Leading Yourself
                <p></p>
              </li>
              <li>
                Teamwork Foundations
                <p></p>
              </li>
            </ul>
          </div>
        </div>
        <div className='about-arrow'>
        See My Projects<Link to='/projects'>
          <i class="fa-sharp fa-solid fa-arrow-right" id='arrow'></i>
          </Link> 
      </div>
      </div>
    </div>
  )
}

export default About