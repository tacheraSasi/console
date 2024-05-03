import React, { useState } from 'react'
import Modal from './modal/Modal'
import { useCookies } from 'react-cookie'
import ColorGenerator from '../utils/ColorGenerator'
import Loader from './loader/Loader'

const AddTeacher = ({ mode, setShowModal }) => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [isLoading ,setIsLoading] = useState(false)
    const editMode = mode === 'edit' ? true : false
  
    const [data, setData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      phone:"",
      schoolUid:"school_unique_id"
    })
    const postData = async (e) => {
      e.preventDefault()
      try {
        setIsLoading(true)
        const response = await fetch(`http://localhost:3000/myTasks/add`, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        if (response.status === 200) {
          console.log('WORKED')
          setShowModal(false)
          setIsLoading(false)
        }
  
      } catch(err) {
        console.error(err)
        setIsLoading(false)
      }
    }
  
    const editData = async (e)=>{
      e.preventDefault()
      try {
        setIsLoading(true)
        const response = await fetch(`http://localhost:3000/myTasks/edit/${task.id}`, {
          method: "PUT",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
        if (response.status === 200) {
          console.log('WORKED')
          setShowModal(false)
          setIsLoading(false)
          getData()
        }
  
      } catch(err) {
        console.error(err)
        setIsLoading(false)
      }
  
  
    }
  
    const handleChange = (e) => {
      const { name, value } = e.target
      
      setData(data => ({
        ...data,
        [name] : value
      }))
  
      console.log(data)
  
    }
  return (
    <Modal 
    heading="Add a teacher"
    setShowModal={setShowModal}
    imgNumber={Math.floor(Math.random()*12)}>
        <form>
          <input
            required
            maxLength={100}
            placeholder={`Enter the first name`}
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
          <input
            required
            maxLength={100}
            placeholder={`Enter the last name`}
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
          <input
            required
            maxLength={100}
            placeholder={`Enter the email`}
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            required
            type='number'
            maxLength={100}
            placeholder={`Mobile number e.g +255...`}
            name={"phone"}
            value={data.phone}
            onChange={handleChange}
          />
          
          <button 
          type="submit" 
          className={mode}  
          onClick={editMode ? editData: postData}>
            {isLoading?<Loader text={"adding..."} />:editMode?'edit':'create'}
          </button>
          
        </form>
    </Modal>
  )
}

export default AddTeacher