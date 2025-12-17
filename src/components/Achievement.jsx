import React, { useState } from 'react'
import '../styles/Achievement.css'

function Achievement({ title, description, imagePlaceholder }) {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div 
      className={`achievement-card ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
      <div className="achievement-image">
        <div className="achievement-image-placeholder">
          {/* Placeholder for achievement image */}
        </div>
      </div>
      <div className="achievement-content">
        <h3 className="achievement-title">{isClicked ? 'Achievement Unlocked!' : title}</h3>
        <p className="achievement-description">
          {isClicked ? 'Congratulations! You earned this achievement.' : description}
        </p>
      </div>
    </div>
  )
}

export default Achievement

