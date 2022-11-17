import React from 'react'
import './Profile.css'
import Profilephoto from './assets/profile.jpg'
import {Button} from "react-bootstrap"

const FullName = () => {
  return (
  <div>  
    <div className='name'>
        <div className='intro'>
            <p>Hi,</p>
            <p>I'm Amal,</p>
            <p>Web developer</p>
            <Button variant="outline-secondary">Contact Me !</Button>{' '}
        </div>
        <img src= {Profilephoto} alt='pic' />
    </div>
    <div className='phrase'>
      <p>I code beautifully simple things, and I love what I do.</p>
    </div>





  </div>  
  )
}

export default FullName