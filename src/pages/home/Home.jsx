import React, { useState,useEffect } from 'react'
import { useCookies } from 'react-cookie'
import './home.css';
import Header from '../../components/Header';
import TaskList from '../../components/TaskList';

const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const authToken = cookies.AuthToken
  const userEmail = cookies.Email
  const [ tasks, setTasks] = useState(null)

  const getData = async () => {
  
    try {
    const response = await fetch(`http://localhost:3000/myTasks/${userEmail}`)
    const json = await response.json()
    setTasks(json.todos)
    } catch (err) {
    console.error(err)
    }
    
  }

  useEffect(() => {
    console.log(cookies)
    if (authToken) {
      getData()
    }}
  , [])

  console.log(tasks)
  return (
    <div className='home'>
      <Header getData={getData}/>
      <TaskList getData={getData} tasks={tasks}/>
    </div>
  )
}

export default Home
