import React from 'react'
import { Link } from 'react-router-dom';
import './resume.css'

function Resume() {

  const downloadFile = () => {
    const link = document.createElement("a");
    link.download = "file.pdf";
    link.href = "https://drive.google.com/file/d/1UYWKWRJDvFlcTgzlgeNsqszVEfuid3TV/view?usp=sharing";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };



  return (
    <div className='resumeContainer'>
      <div className='resume-container'>
        <div className='resume-section'>
          <h2>Resumé...</h2>
          <h4>View or <Link onClick={downloadFile} >Download
          </Link> my resume</h4>
        </div>
        <div className='preview'>
          <Link to='https://drive.google.com/file/d/1UYWKWRJDvFlcTgzlgeNsqszVEfuid3TV/view?usp=sharing'>
          <img id='img-cv' src='https://i.postimg.cc/zGCMzKRW/Screenshot-from-2023-02-17-18-42-39.png'
          alt='resume preview'
          />
          </Link>
        </div>
        <div className='resume-arrow'>
          Satisfied? Contact Me Now  <Link to='/contact'>
            <i class="fa-sharp fa-solid fa-arrow-right" id='arrow'></i>
            </Link> 
        </div>
      </div>
    </div>
  )
}

export default Resume