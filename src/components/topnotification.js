import React from 'react'
import '../components-styles/sidenavigation.css'
import notification from '../icons/notifications-svgrepo-com.svg';
import userIcn from '../icons/user-svgrepo-com.svg';

export default function Topnotification() {
  return (
    <div>
      <div className="top-nav">
            <div className="Signout-button">
               
                SIGN OUT</div>
            <div className="notification">
                <img src={notification} alt="noti" className='notification-Image'/>
                <div className="notification-indicator"></div>
            </div>
            <div className="user">
                <img src={userIcn} alt="user" className='user-icn'/>
                <div className="username-perview">Username</div>

            </div>
    </div>
    </div>
  )
}
