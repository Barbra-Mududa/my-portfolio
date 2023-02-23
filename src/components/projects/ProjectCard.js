import React from 'react'
import { Link } from 'react-router-dom'
import './project.css'

function ProjectCard() {
  return (
    <div className='pcard-section'>
    <div class="profile-card-4 text-center">
      <img class="img img-responsive" src="https://i.postimg.cc/KzFB2YyF/enigmatic.png" alt=''/>
        <div class="profile-content">
            <div class="profile-description">
              <h4 class="text-center"><strong>ENIGMATIC</strong></h4>
              <p>Enigmatic is a hiking events website that enables hikers explore the beauty of nature in Kenya. The hiker is able to pick a hike of choice and join the rest of the hiking community in its adventures.</p>
              <Link to='https://github.com/Barbra-Mududa/enigmatic'><button id='p-btn'>View Code</button></Link>
            </div>
     </div>
    </div>
    <div class="profile-card-4 text-center">
      <img class="img img-responsive" src="https://i.postimg.cc/8PhmQxJd/vikali.png" alt=''/>
        <div class="profile-content">
            <div class="profile-description">
              <h4 class="text-center"><strong>VIKALI</strong></h4>
              <p>Vikali seeks to create an online store for consumers so that it is simple to shop for your favorite items from the vast array of online shopping websites that are readily available on the internet. One may make purchases online from the comfort of their homes using our website.</p>
              <Link to='https://github.com/adamswonder/vikali'><button id='p-btn'>View Code</button></Link>
            </div>
     </div>
    </div>
    <div class="profile-card-4 text-center">
      <img class="img img-responsive" src="https://i.postimg.cc/W1w8rxsp/movieforum.png" alt=''/>
        <div class="profile-content">
            <div class="profile-description">
              <h4 class="text-center"><strong>MOVIE-FORUM</strong></h4>
              <p>This is a simple web app that allows movie lovers around the world to come to our platform and checkout the latest and highest rated films. A user is able to to log into the plaform, view the latest titles and reviews/comments on the movies left by other users who have watched them before. A user is also able to post a review, update and delete it.</p>
              <Link to='https://github.com/JosephNjeruNjenga/movie-forum'><button id='p-btn'>View Code</button></Link>
            </div>
     </div>
    </div>
    <div class="profile-card-4 text-center">
      <img class="img img-responsive" src="https://i.postimg.cc/GmKP9YjH/sweet-living.png"  alt=''/>
        <div class="profile-content">
            <div class="profile-description">
              <h4 class="text-center"><strong>SWEET-LIVING</strong></h4>
              <p>Swee-Living website allows realtors and users around the world to buy,sell and rent real estate properties . A user is able to to log into the plaform, view the available real estate properties and decide whether they will purchase it.</p>
              <Link to='https://github.com/Tjay114/sweet-living-frontend'><button id='p-btn'>View Code</button></Link>
            </div>
     </div>
    </div>
    </div>
  )
}

export default ProjectCard