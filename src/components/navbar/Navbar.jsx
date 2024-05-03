import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineFeedback, MdAdminPanelSettings } from 'react-icons/md';
import { PiClockAfternoonFill } from 'react-icons/pi';
import './navbar.scss';

const Navbar = ({ setIsLeftbarOpened }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Updating every second

    return () => clearInterval(intervalId); 

  }, []);

  const formattedTime = currentDateTime.toLocaleTimeString([], 
    { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const formattedDayOfWeek = currentDateTime.toLocaleDateString('en-US',
   { weekday: 'long' });

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span>ekiliSense.</span>
        </Link>
      </div>
      <div className="right">
        <div className="clock">
          <PiClockAfternoonFill color='#33995d' size={20} />  
             {formattedDayOfWeek}, {formattedTime}
        </div>
        <div className="user">
          <MdAdminPanelSettings color='#33995d' size={30} />
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
