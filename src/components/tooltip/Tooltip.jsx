import React from 'react'
import './tooltip.css'

export const Tooltip = ({ children, text }) => {
  return (
    <div class="tooltip">
        {children}
        <span class="tooltiptext tooltip-right">
            {text}
        </span>
    </div>
  )
}
