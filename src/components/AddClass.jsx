import React, { useState } from 'react'
import Modal from './modal/Modal'
import { useCookies } from 'react-cookie'
import Loader from './loader/Loader'

const AddClass = ({ mode, setShowModal, getData }) => {
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [isLoading ,setIsLoading] = useState(false)
    const editMode = mode === 'edit' ? true : false
  
    const [data, setData] = useState({
      className:"",
      classTeacher:"",
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
          getData()
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
/*     let imgNumber = Math.floor(Math.random()*12) */
  return (
    <Modal 
    heading="Add a Class"
    setShowModal={setShowModal}
    imgNumber={Math.floor(Math.random()*12)}>
        <form>
          <input
            required
            maxLength={100}
            placeholder={`Enter the class name`}
            name="className"
            value={data.className}
            onChange={handleChange}
          />
          <label htmlFor="class-teacher-select">
            Choose a class teacher for this class
          </label>
          <select 
          name="classTeacher" 
          id="class-teacher-select"
          placeholder="Choose a class teacher"
          value={data.classTeacher}
          onChange={handleChange}>
            <option value="teacher1">
              teacher1
            </option>
            <option value="teacher2">
              teacher2
            </option>
            <option value="teacher3">
              teacher3
            </option>
          </select>
          
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

export default AddClass