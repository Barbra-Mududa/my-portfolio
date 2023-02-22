import React from 'react'
import './about.css'

function Card() {
  return (
    <div>
        <figure>
        <div className='card shadow s-white rounded text-black'>
            <img src='https://i.postimg.cc/853LHjYt/image-5-1.jpg' alt=''/>
          <figcaption>
            <div className='card-img-overlay d-flex flex-column my-text'>
              <p id='overlay-text'>University of Nairobi: 2018-2022</p>
              <p id='overlay-text'>B.A Political Science and Psychology</p>
            </div>
          </figcaption>
        </div>
        </figure>
        <figure>
        <div className='card shadow s-white rounded text-black'>
          <div>
            <img src='https://i.postimg.cc/rpgNWFsg/image-5-2.jpg' alt=''/>
          </div>
          <figcaption>
            <div classname='card-img-overlay d-flex flex-column my-text'>
              <p id='overlay-text'>Moringa School 2022-2023</p>
              <p id='overlay-text'>Software Development</p>
              <p id='overlay-text'>HTML%, CSS, JavaScript, React,Bootstrap, Node.js, Ruby, Ruby on Rails, MySQL</p>
            </div>
          </figcaption>
          </div>
        </figure>
    </div>
  )
}

export default Card