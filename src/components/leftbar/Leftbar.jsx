import React, { useState } from 'react';
import { FaSmile, FaHome, FaUsers, FaChartBar, FaSchool, FaCalendar, FaInbox } from 'react-icons/fa';
import './leftbar.css';
import { Link } from "react-router-dom"
import { PiKanbanFill } from 'react-icons/pi';
import { RiSettings6Fill } from "react-icons/ri";
import { Tooltip } from '../tooltip/Tooltip';
import Settings from '../settings/Settings';
import { MdMarkEmailRead } from "react-icons/md";

const Leftbar = ({setIsLeftbarOpened}) => {
  const [isActive, setIsActive] = useState("")
  const [openSetting, setOpenSetting] = useState(false)
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <Tooltip text="ekiliSense">
            <div className="user">
              <img src="/favicon.jpeg" alt="Tachera sasi" />
            </div>
          </Tooltip>
          <div className="sidebar-options">
            <Link 
              style={{textDecoration:'none'}} to="/" 
              onClick={()=>{setIsActive('Home')}}>
              <div className='option' title='Home' id={isActive=='Home'?'active':''}>
                <Tooltip text="home">
                  <FaHome className="icon" size={25}  />
                </Tooltip>
              </div>
            </Link>
            <Link 
              style={{textDecoration:'none'}} to="/sense" 
              onClick={()=>{setIsActive('Emailbox')}}>
              <div className="option" id={isActive=='Emailbox'?'active':''}>
                <Tooltip text="sense">
                  <FaInbox className="icon" size={25}  />
                </Tooltip>
              </div>
            </Link>
            <Link 
              style={{textDecoration:'none'}} to="/email/send" 
              onClick={()=>{setIsActive('Emailbox')}}>
              <div className="option" id={isActive=='Emailbox'?'active':''}>
                <Tooltip text="email sender">
                  <MdMarkEmailRead className="icon" size={25}  />
                </Tooltip>
              </div>
            </Link>
          {/* settings */}
          {openSetting&&
          <Settings setOpenSetting={setOpenSetting} />}
            
            
          </div>
        </div>
        <div className="bottom">
        
          <div className='option'title='settings' id={isActive=='Home'?'active':''}>
            <Tooltip text="settings">
              <RiSettings6Fill className="icon" size={25} color='#ffff'/>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leftbar;
