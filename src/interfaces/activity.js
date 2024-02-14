import React from 'react'
import '../components-styles/activity.css'
import notification from '../icons/notifications-svgrepo-com.svg';
import userIcn from '../icons/user-svgrepo-com.svg';
import Topnotification from '../components/topnotification';
import Sidenavigation from '../components/sidenavigation';
import ActivityTable from '../components/activity-table';
import Button from '@mui/material/Button';


export default function Activity(){
    return(
    <div>
        <div className="topnav"><Topnotification/></div>
        <div className="side-nav"><Sidenavigation/></div>       
        <div class="container">
            <div class="upper-row">Hello Username(ID)</div>
            <div class="middle-row">
                <div class="filter">Filter with,</div>    
                <div class="search-outer">
                    <div class="search-left">
                        <p>Search with Document ID - <input type='text'></input></p>
                        <p>Search Document by name - <input type='text'></input></p>
                    </div>
                    <div class="search-middle">
                        <p>Search by date - <input type='text'></input></p>
                        <div class = "middle-inner">
                            <p style={{margin:'20px'}}>Search by ID</p>
                            <p style={{margin:'20px'}}>Sort by Approval status - <input type='checkbox'></input></p>
                        </div>
                    </div>
                    <div class="search-right">
                    <Button variant="contained" > 
                        Search
                    </Button>
                    </div>
                </div>
            </div> 
            <div class="lower-row">
                <ActivityTable/>
            </div>
        </div>
    </div>
    )
}