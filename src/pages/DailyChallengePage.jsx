import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/DailyChallengePage.css'

function DailyChallengePage() {
  const navigate = useNavigate()
  const [inputText, setInputText] = useState('')
  const [submittedText, setSubmittedText] = useState('')
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const handleBackClick = () => {
    navigate('/levels')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputText.trim()) {
      setSubmittedText(inputText)
      setInputText('')
      setHasSubmitted(true)
    }
  }

  return (
    <div className="daily-challenge-page">
      {/* Left Sidebar */}
      <aside className="challenge-sidebar">
        <button type="button" className="back-button" onClick={handleBackClick}>
          <span className="back-icon">★</span>
        </button>
        
        <div className="header-user-info">
          <h2 className="user-name">Sans Undertale</h2>
          <p className="user-role">Student profile</p>
        </div>

        <div className="sidebar-content">
          <h3 className="challenge-heading">Daily challenge</h3>
          <p className="challenge-subtitle">No AI allowed!</p>
          
          <p className="challenge-description">
            Dizzy, the protagonist, had been captured by the evil Sir Scales. Escape is not an easy task, but with your help Dizzy can get out!
          </p>
          
          <ul className="challenge-instructions">
            <li>Write controls that allow class char to move across the map by using keys WASD. Feel free to use materials from previous lessons if any struggle occurrs.</li>
          </ul>
        </div>
      </aside>

      {/* Right Column - Main Content */}
      <main className="challenge-main">
        {/* Game Screen Placeholder */}
        <div className={`game-screen-placeholder ${hasSubmitted ? 'submitted' : ''}`}>
          {/* Placeholder for game screen */}
        </div>

        {/* Code Editor/Text Display Area */}
        <div className="code-editor">
          <div className="code-editor-lines">
            {Array.from({ length: 31 }, (_, i) => (
              <div key={i} className="line-number">{i + 1}</div>
            ))}
          </div>
          <div className="code-editor-content">
            {submittedText ? (
              <pre className="submitted-code">{submittedText}</pre>
            ) : (
              <div className="code-editor-empty">Start typing your code...</div>
            )}
          </div>
        </div>

        {/* Input Field */}
        <form className="input-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              className="code-input"
              placeholder="Input here"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit" className="submit-code-button">
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default DailyChallengePage

