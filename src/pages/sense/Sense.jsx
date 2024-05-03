import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { MdUploadFile } from 'react-icons/md'
import './sense.css'
import PdfBox from '../../components/PdfBox'

const Sense = () => {
    const [showModal, setShowModal] = useState(false)
    const [cookies, setCookie, removeCookie] = useCookies(null)
  return (
    <div className='sense'>
        <div className='header'>
            {
            //upload modal
            }
            <div>
            <div className="header-title">ekiliSense</div>
            <div className="header-sub-title">{cookies.Email}</div>
            </div>
            <div className='add'>
            <button className='add-btn' onClick={()=>{setShowModal(true)}}> 
                <MdUploadFile size={20}/>{' '} 
                <span className='add-task-txt'>Upload</span>
            </button>
            </div>
        
        </div>
        <div className="container">
            <PdfBox />
            <PdfBox />
            <PdfBox />
            <PdfBox />
        </div>
    </div>
  )
}

export default Sense