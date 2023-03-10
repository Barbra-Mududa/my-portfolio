import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import './home.css';

function Home() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:example@example.com';
  };

  return (
    <div className="main-page">
      <div className='homeContainer'>
        <h1 id='type-animation'>
          <TypeAnimation
          sequence={[
            'Hi, I am Barbra Mududa', 
            3000, // Waits 3s
            'I am a Sofware Developer', 
            3000, // Waits 3s
            () => {
              console.log('Done typing!'); 
            }
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '2.5em' }}
          />
        </h1>
        <p>
          Dedicated full-stack developer with experience creating web applications
          with JavaScript,<br></br>Reactjs,Nodejs, SQL, Ruby and Ruby on Ruby on Rails.
        </p>
        <p>
          View my <Link to='/projects'><button className='home-btn'>Projects</button></Link>, <Link to='/about'><button className='home-btn'>About</button>
          </Link>, <Link to='/resume'><button className='home-btn'>Resume</button></Link>, <Link to='/contact'><button className='home-btn'>Contact</button>
          </Link> or send me an email at <br></br> 
          <Link onClick={handleEmailClick} id='email-link'>mududabarbs2017@gmail.com.</Link>
        </p>
      </div>
      <div className='contact-icons'>
        <Link to="https://github.com/Barbra-Mududa/">
          <i class="fa-brands fa-github" id='icons'></i>
        </Link>
        <Link to="https://www.linkedin.com/in/barbra-mududa-30a36124b/">
          <i class="fa-brands fa-linkedin" id='icons'></i>
        </Link>
        <Link onClick={handleEmailClick}>
          <i class="fa-solid fa-envelope" id='icons'></i>
        </Link>
        
      </div >
      <div className='home-arrow'>
        See More About Me <Link to='/about'>
          <i class="fa-sharp fa-solid fa-arrow-right" id='arrow'></i>
          </Link> 
      </div>
      
    </div>
  )
}

export default Home