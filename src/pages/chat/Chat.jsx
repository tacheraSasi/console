import React, { useState } from 'react'
import './chat.css'
import { MdPerson2, MdSend } from 'react-icons/md'
import PdfView from '../../components/pdfView/PdfView'
import Message from '../../components/Message'


const Chat = () => {
    const [input, setInput] = useState(null)
    const pdfUrl = '/path/to/your/pdf/document.pdf'

    const handlesubmit = async (e)=>{
        e.preventDefault()
        console.log(input)
    }
  return (
    <div className='chat-container'>
        <PdfView pdfUrl={pdfUrl}/> 
        <div className="chat">
            <div className="chat-area">
                <Message 
                isBudddy={true}
                message={`Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Est, qui quia. Ipsum`}
                />
                <Message 
                isBudddy={false}
                message={`Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Est, qui quia. Ipsum
                laboriosam nam aliquid fugiat beatae, mollitia labore quod
                eaque architecto recusandae doloremque odio 
                at! Dolore quas minima harum.`}
                />
                <Message 
                isBudddy={false}
                message={`Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Est, qui quia. Ipsum
                laboriosam nam aliquid fugiat beatae, mollitia labore quod
                eaque architecto recusandae doloremque odio 
                at! Dolore quas minima harum.`}
                />
                <Message 
                isBudddy={true}
                message={`Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Est, qui quia. Ipsum
                laboriosam nam aliquid fugiat beatae, mollitia labore quod
                eaque architecto recusandae doloremque odio 
                at! Dolore quas minima harum.`}
                />
                <Message 
                isBudddy={true}
                message={`Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Est, qui quia. Ipsum
                laboriosam nam aliquid fugiat beatae, mollitia labore quod
                eaque architecto recusandae doloremque odio 
                at! Dolore quas minima harum.`}
                />
                <Message 
                isBudddy={false}
                message={`Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Est, qui quia. Ipsum
                laboriosam nam aliquid fugiat beatae, mollitia labore quod
                eaque architecto recusandae doloremque odio 
                at! Dolore quas minima harum.`}
                />
                

            </div>
            <form onSubmit={handlesubmit}>
                <input 
                type="text" 
                placeholder='Hello BUDDDY' 
                onChange={(e)=>setInput(e.target.value)}
                />
                <button type="submit"><MdSend /></button>
            </form>
        </div>
    </div>
  )
}

export default Chat