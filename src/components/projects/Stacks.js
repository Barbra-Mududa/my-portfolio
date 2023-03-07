import React from 'react'
import './project.css'

function Stacks({progress}) {
    // const filledBar= {
    //     width:` ${progress}%`
    // }

  return (
    <div className='progressContainer'>
        <div className='p1' >
        <div className='filled1'>85%</div> 
        <h3 className='text1'>Front-end</h3>
        </div>
        <div className='p1'>
        <div className='filled2'>70%</div> 
        <h3 className='text1'>Backend</h3>
       </div>
       <div className='p1'>
        <div className='filled3'>90%</div> 
        <h3 className='text1'>UI/UX Design</h3>
       </div>
    </div>
    

  )
}

export default Stacks