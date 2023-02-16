import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div className='homeContainer'>
      <div className='contact-container'>
        <div className='contact-me'>
          <img id='phone' src='https://img.freepik.com/free-vector/phone_78370-560.jpg?w=2000'/>
            <h2>Contact Me</h2>  
        </div>
        <div className='contact-message'>
            <h3>DISCUSS A PROJECT OR JUST GET IN TOUCH? MY INBOX IS OPEN</h3>
        </div>
        <form class="form">
          <input type="text" class="name formEntry" placeholder="Name" />
          <input type="text" class="email formEntry" placeholder="Email"/>
          <textarea class="message formEntry" placeholder="Message"></textarea>
          <button class="submit formEntry" onclick="thanks()">Submit</button>
        </form>
        
    </div>
      
    </div>
  )
}

export default Contact
