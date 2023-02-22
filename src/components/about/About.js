import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
import './about.css'

function About() {
  return (
    <div className='aboutContainer'>
      <div>
        <div>
          <h2>About Me...</h2>
          <h4>As a young and enthusiastic software developer, I have the ambition to create interactive and practical platforms <br></br>
              that address current challenges. My goal is to help businesses and individuals solve their day-to-day problems with <br></br>
              innovative solutions. My previous experience and skills have enabled me to build robust applications that are easy <br></br>
              to use and highly efficient. With my expertise, I can provide you with the perfect tool for your business or project<br></br>
              needs. Let me show you how my development skills can make a difference in your organization.
          </h4>
        </div>
        <div>
          <h3>Education</h3>
          <div className='card-container'>
            <Card />
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