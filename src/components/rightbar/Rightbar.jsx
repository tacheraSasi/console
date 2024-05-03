import React, { useState, useEffect } from 'react';
import { FaUsers, FaComment } from 'react-icons/fa';
import CountUp from 'react-countup';
import axios from 'axios';
import './rightbar.scss';

const Rightbar = () => {
  const [usersCount, setUsersCount] = useState(0);
  const [insightsCount, setInsightsCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Users Count
        const usersResponse = await axios.get('http://console.ekilie.com/api/getUsersCount.php');
        const usersData = usersResponse.data;
        setUsersCount(usersData.users);

        // Fetch Insights Count
        const insightsResponse = await axios.get('http://console.ekilie.com/api/getInsightsCount.php');
        const insightsData = insightsResponse.data;
        setInsightsCount(insightsData.insights);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="rightbar">
      <div className="container">
        <h2>Users</h2> <br />
        <CountUp end={usersCount} className="count-up" />
        <FaUsers className="icon" />
      </div>

      <div className="container">
        <h2>Insights</h2> <br />
        <CountUp end={insightsCount} className="count-up" />
        <FaComment className="icon" />
      </div>
    </div>
  );
};

export default Rightbar;
