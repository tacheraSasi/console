import React from "react"
import { IoMdAlert } from "react-icons/io";
import 'animate.css';

const EkilieAlert = ({ setIsSent, successMessage, isSent })=>{
   
    if(isSent){
        setTimeout(()=>{
            setIsSent(false)
        },10000)
        
    }
   
    return(
        <span className='ekilie-alert  animate__fadeInRight animate__fadeOutRight' style={{
            position:'absolute',
            bottom:10,
            right:10,
        }}>
            <IoMdAlert  size={20}/>
            <span >{successMessage} </span>
        </span>
    )
}
export default EkilieAlert