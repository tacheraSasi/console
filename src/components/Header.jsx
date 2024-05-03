import React,{ useState} from 'react'
import { useCookies} from 'react-cookie'
import { MdAddTask } from "react-icons/md";
import EkilieAlert from "./EkilieAlert"
import Modal from './modal/Modal';
import AddTeacher from './AddTeacher';
import AddClass from './AddClass';

const Header = ({ getData }) => {
  const [showModal, setShowModal] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies(null)
  return (
    <div className='header'>
      {showModal&& 
      <AddTeacher 
      mode={'create'} 
      setShowModal={setShowModal} 
      
      />
      }
        <div>
          <div className="header-title">ekiliSense</div>
          <div className="header-sub-title">{cookies.Email}</div>
        </div>
        <div className='add'>
          <button className='add-btn' onClick={()=>{setShowModal(true)}}> 
            <MdAddTask size={20}/>{' '} 
            <span className='add-task-txt'> Add a teacher</span>
          </button>
        </div>
      
    </div>
  )
}

export default Header
