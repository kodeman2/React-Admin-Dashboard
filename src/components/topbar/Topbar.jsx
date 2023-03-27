import React from 'react'
import './topbar.css'
 import { NotificationsActive, Language, Settings } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
     <div className="topbarWrapper">
      <div className="topLeft"><span className="logo">Koldboard</span></div>
      <div className="topRight">
       <div className="topBarIconContainer">
        <NotificationsActive  />
        <span className="topIconBadge">2</span>
       </div>
       <div className="topBarIconContainer">
        <Language  />
        <span className="topIconBadge">2</span>
       </div>
       <div className="topBarIconContainer">
        <Settings  />
               </div>
               <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" className="topAvatar" />
      </div>
     </div>
     </div>
  )
}
