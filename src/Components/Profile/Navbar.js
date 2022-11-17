import React from 'react'
import {Tabs, Tab, } from "react-bootstrap"
import './Profile.css'

const Navbar = () => {
  return (
    <div className='nav'>
         <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Home">
        
      </Tab>
      <Tab eventKey="profile" title="Profile">
        
      </Tab>
      <Tab eventKey="About us" title="About us">
        
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        
      </Tab>
    </Tabs>
    </div>
  )
}

export default Navbar