import React from 'react'
import './loader.css'

const Loader = ({ text }) => {
  return (
    <div className='main-loader'>
    <div className='loader'> </div> {" "}
    <span className='loader-text'>{text}</span>
    </div>
  )
}

export default Loader