import React from 'react'
import { Link } from 'react-router-dom'
import ColorGenerator from '../utils/ColorGenerator'

const PdfBox = () => {
  return (
    <div className='pdf'>
        <div className="name">
            ekiliSense.pdf
        </div>
        <Link to='chat/123'>
        <button className="open-pdf" style={{
            backgroundColor:ColorGenerator()
        }}>
            Open
        </button>
        </Link>
    </div>
  )
}

export default PdfBox