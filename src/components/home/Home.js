import React from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import './home.css';
import Footer from '../navbar_footer/Footer';

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
          I am an experienced software developer with expertise in React, Ruby on Rails, MySQL, HTML, CSS, and JavaScript. I possess an in-depth understanding of web development and possess the ability to deliver high-quality solutions. Moreover, I have knowledge on plaforms like Jira and <Link to='https://www.figma.com/files/drafts?fuid=1202324557437039500' id='figma-link'>Figma</Link>

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
      <Footer/>
    </div>
   
  )
}

export default Home