import React, { useState } from 'react'
import TaskListItem from './TaskListItem'
import Skeleton from './skeleton/Skeleton'

const TaskList = ({getData, tasks}) => {
    const [showModal,setShowModal] = useState(false)
    const [task, setTask] = useState({
        title:null,
        desc:null,
        progress:null
    })
  return (
    <div className='task-list'>
        {tasks&&tasks?.map((task,index)=>(
            <TaskListItem 
            key={index}
            title={task.title}
            desc={task.task_desc}
            progress={task.progress}
            date={task.date}
            task={task}
            getData={getData}
            setShowModal={setShowModal}
            setTask={setTask}
        />
        ))}
        {tasks&&tasks.length<1&&
            <div>No Tasks Found</div>
        }
        {!tasks&&
            <Skeleton />
        }
        {/* <Modal
        mode={'edit'} 
        setShowModal={setShowModal} 
        task={task}
        
        /> */}
        
        

    </div>
  )
}

export default TaskList