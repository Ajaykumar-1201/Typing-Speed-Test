import React from 'react'

const Menu = () => {
  return (
    <div className='upper-menu'>
        <div className="counter">15
        </div>
        <div className="modes">
            <div className="time-mode" id={15}>15s</div>
            <div className="time-mode" id={30}>30s</div>
            <div className="time-mode" id={60}>60s</div>
        </div>
    </div>
  )
}

export default Menu