import React from 'react'
import { MdPerson2 } from 'react-icons/md'
import { AiOutlineRobot } from 'react-icons/ai'

const Message = ({ message, isBudddy}) => {
  return (
    <div className={`message ${isBudddy?'budddy':''}`}>
        <div className={`message-title  `}>{isBudddy? <AiOutlineRobot />  :<MdPerson2 />} {isBudddy?'BUDDDY':'ME'}</div>
        {message}
    </div>
  )
}

export default Message