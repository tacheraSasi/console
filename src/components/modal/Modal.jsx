import React, { Children, useEffect, useState} from 'react'
import { useCookies } from 'react-cookie'
import './modal.css'
import Overlay from '../overlay/Overlay'
import { RiCloseCircleFill } from 'react-icons/ri'
import ColorGenerator from '../../utils/ColorGenerator'

const Modal = ({ children, setShowModal, heading, imgNumber}) => {
  
  return (
    <Overlay>
      <div className="modal">
        <div className="add">
          <div className="add-card">
            <div className="left" style={{
              background:`linear-gradient(rgba(87, 165, 120, 0.5),
              rgba(9, 66, 77, 0.8)), url("/img${imgNumber}.jpg") center`,
              backgroundSize:'cover'
            }}>
            <div class="top-container">
                  <div style={{display: 'flex',justifyContent: 'flexStart'}}>
                    <div class="logo-container">
                      <img src="/favicon.jpeg" alt="" class="logo"/>
                      <div class="logo-text">ekilie.</div>
                    </div>
                  </div>
                  <div class="middle-content">
                    <h1>ekiliSense</h1>
                  </div>
                </div>
                <div class="bottom-container">
                  Embark on an Odyssey of Technological Marvels with EkiliSense:
                  Traverse the Digital Frontiers of AI-Driven Education
                </div>
            </div>
            <div className="right">
            <div className="form-title-container">
              <h1>{heading}</h1>
              <span className='x-close' onClick={() => setShowModal(false)}>
              <RiCloseCircleFill size={30} color='#b96767'/>
              </span>
            </div>
            {children}
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  )
}

export default Modal
