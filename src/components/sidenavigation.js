import React from 'react'
import SubmissionLogo from '../icons/searching-uploads-svgrepo-com.svg';
import ReportLogo from '../icons/Report.svg';
import QueryLogo from '../icons/Query.svg';
//import signouticn from '../icons/log-out-01-svgrepo-com.svg'
import {bgchange} from './sidenav';
import {navigationToggle} from './sidenav';
import {showSubSections} from './sidenav';
import { userLogin } from './sidenav';
import {Activity} from '../interfaces/activity'
import '../components-styles/sidenavigation.css'

//additional images for short navigation
import menu from '../icons/menu-navigation-grid-1528-svgrepo-com.svg';
import home from '../icons/home-1-svgrepo-com.svg';
import Lmenu from '../icons/menu-alt-01-svgrepo-com.svg';

import { Link } from 'react-router-dom';

export default function Sidenavigation() {
    return (
        <div className='navigation'>
            {/*-----------------------------------side navigation of shrinked ---------------------------------  */}
            <div className="short-nav" id='short-nav'>
                <div className='menu-choose' onClick={() => navigationToggle(true)}><img src={menu} alt="menu" className='menu' id='menu' /></div>
                <Link to="/"><div className="home" id='S-home' onClick={() => bgchange(5)} ><img src={home} alt="home" className='S-home' /></div></Link>
                <div className="short-options">
                    <Link to="/{Activity}"><div className="S-pathitm-con" id='pathitm-con' onClick={() => bgchange(1)}><img src={SubmissionLogo} alt="icn" className="S-icon" /></div></Link>
                    <Link to="/"><div className="S-pathitm-act" id='pathitm-act' onClick={() => bgchange(2)}><img src={ReportLogo} alt="icn" className="S-icon" /></div></Link>
                    <Link to="/"><div className="S-pathitm-mng" id='pathitm-mng' onClick={() => bgchange(3)}><img src={QueryLogo} alt="icn" className="S-icon" /></div></Link>
                </div>
            </div>

            {/*-----------------------------------side navigation of expanded ------------------------------------  */}
            <div className="sidenav" id='sidenav'>
                <div className="name">
                    <div className="main-name" id='LS-home' onClick={() => bgchange(5)}>DOCDIGITIZE</div>
                    <div className="name-user">ADMIN <img src={Lmenu} alt="menuu" className='L-menu' onClick={() => navigationToggle(false)} /></div>
                    <hr />
                </div>
                
                <div className="path">
                    <Link>
                    <div className="pathitm-sr" id='Lpathitm-sr' onClick={() => {bgchange(1);showSubSections(true);}}>
                        <div className="pathitm-con" id='Lpathitm-con'><img src={SubmissionLogo} alt="icn" className="icon" />SUBMISSION REVIEW</div>
                        <Link to="/"><div className="pathitm-approved" id='Lpathitm-approved' onClick={() => bgchange(1)}>APPROVED DOCUMENTS</div></Link>
                        <Link to="/"><div className="pathitm-pending" id='Lpathitm-pending' onClick={() => bgchange(1)}>PENDING DOCUMENTS</div></Link>
                    </div></Link>
                    <Link>
                    <div className="pathitm-act" id='Lpathitm-act' onClick={() => {bgchange(2);showSubSections(true); }}>
                    <div className="pathitm-con" id='Lpathitm-con'><img src={ReportLogo} alt="icn" className="icon" />REPORT</div>
                        <Link to="/"><div className="" id='' onClick={() => bgchange(2)}>R1</div></Link>
                        <Link to="/"><div className="pathitm-pending" id='Lpathitm-pending' onClick={() => bgchange(2)}>R2</div></Link>
                     </div></Link>
                    <Link to="/"><div className="pathitm-mng" id='Lpathitm-mng' onClick={() => {bgchange(3);showSubSections(false); }}><img src={QueryLogo} alt="icn" className="icon" />QUERY</div></Link>
                </div>

                {/*-------------------bottom user info displayin container----------------------------------------  */}
                <div className="user-login-info-container">
                    <div className="user-login-info">
                        <div className="option">User Role</div>
                        <div className="option" onClick={userLogin}>Current Login date</div>
                        <div className="option">Current Login</div>
                        <div className="option">Last Sucessful Login </div>
                    </div>
                    <div className="user-login-info-fill">
                        <div className="fill-role"> -- ADMIN</div>
                        <div className="fill-C-login-date" id='fill-C-login-date' >--</div>
                        <div className="fill-C-login"> </div>
                        <div className="fill-L-login"> -- xxx</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
