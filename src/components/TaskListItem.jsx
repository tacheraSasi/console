import React, { useState } from 'react'
import { MdDelete  } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Modal from './modal/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import timeAgo from '../utils/TimeAgo';


const TaskListItem = ({title,desc,progress,setTask,task,getData}) => {
    const [showModal, setShowModal ] = useState(false)
    

    const deleteTask = async (id)=>{
        if(confirm('Are you sure you want to delete this Task?')){
            try{
                const response = await fetch(`http://localhost:3000/myTasks/delete/${id}`, {
                    method: "DELETE"
                })
                if (response.status === 200) {
                    getData()
                    toast.success('Task deleted', {
                        position: "bottom-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            }
            catch(error){
                toast.error('FAILED', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: 'Bounce',
                });

            }
        }
    }

  return (
    <div className="task-list-item" >
        <div className="task-title" title={title}>{title}</div>
        <div className="task-desc" title={desc}>
            {desc.length>200?`${desc.substring(0,200)}... READ MORE`:desc}
        </div>
        <div className="progress">
            <div className="slider" style={{
                width: `${progress}%`,
                height: '100%',
                backgroundColor: `${task.color}`
            }}/>
        </div>
        <div className="bottom-container">
            <div className='timeago'>
                <span>
                    {timeAgo(task.date)}
                </span>
            </div>
            <div className='action-bar'>
                <div className="bottom-item">
                    <FaRegEdit size={18} color='#82ac82' onClick={()=>setShowModal(true)}/>
                </div>
                <div className="bottom-item">
                    <MdDelete  size={18} color='#993f33' onClick={()=>deleteTask(task.id)}/>
                </div>
            </div>
        </div> <ToastContainer />
        {showModal&&
        <Modal 
        mode={'edit'} 
        setShowModal={setShowModal} 
        getData={getData}
        showModal={showModal}
        task={task}
            
        />}
        
    </div>
  )
}

export default TaskListItem




