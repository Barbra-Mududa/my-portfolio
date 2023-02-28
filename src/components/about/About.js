import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';
import './about.css'

function About() {
  return (
    <div className='aboutContainer'>
      <div className='aboutSection'>
        <div className='aboutHero'>
          <h2>About Me...</h2>
          <h4>As a young and enthusiastic software developer, I have the ambition to create interactive and <br></br> practical platforms 
              that address current challenges. My goal is to help businesses and individuals <br></br> solve their day-to-day problems with 
              innovative solutions. My previous experience and skills have<br></br> enabled me to build robust applications that are easy 
              to use and highly efficient. With my expertise,<br></br> I can provide you with the perfect tool for your business or project
              needs. 
          </h4>
        </div>
        <div className='education'>
          <h3>Education</h3>
            <Card />
        </div>
        <div className='myReads'>
          <h3>My Reads</h3>
          <div className='readList'>
            <ul>
              <li><span>Leading Yourself</span>
                <p>Leading yourself is an essential skill for success in any field. It involves developing self-awareness, setting and
                achieving goals, managing time effectivelyly,making decisions with confidence, and communicating   
                effectively. It involves understanding your strengths and weaknesses, values and beliefs, and how you interact
                with others. Moroever, it outlines  how to stay focused on what you want to achieve.
                </p>
              </li>
              <li><span>Teamwork Foundations</span>
              <p>Teamwork Foundation is a set of principles and practices that help teams work together more effectively. It
               focuses on problem-solving, collaboration, conflict resolution, and team dynamics. By understanding the importance of teamwork and how to foster it in the workplace, teams can become more productive and successful.</p>
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