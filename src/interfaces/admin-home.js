import React from 'react'
import '../components-styles/home.css'
import Topnotification from '../components/topnotification'
import Sidenavigation from '../components/sidenavigation'
import logo from '../icons/tero.jpg';

export default function AdminHome() {
  return (
    <div>
        <div className="topnav"><Topnotification/></div>
        <div className="side-nav"><Sidenavigation/></div>
        <div className='content'>
            <img src={logo} alt="img" className='logo-image' />
            <div className="userinfo">
                <div className="message">Welcome Admin user</div>
                <div className='U-name'>Username</div>
            </div>
        </div>
      
      
    </div>
  )
}

