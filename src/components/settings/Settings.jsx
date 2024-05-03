import React from 'react'
import './settings.css'
import Overlay from '../overlay/Overlay'
import { RiCloseCircleFill } from 'react-icons/ri'

const Settings = ({ setOpenSetting}) => {
  return (
    <Overlay>
        <div className="settings">
            <div className="form-title-container">
            <h3>Settings</h3>
            <span className='x-close' onClick={() => setOpenSetting(false)}>
                <RiCloseCircleFill />
            </span>
            </div>
        </div>
    </Overlay>
  )
}

export default Settings