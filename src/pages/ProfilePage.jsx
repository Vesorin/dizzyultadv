import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/ProfilePage.css'

function ProfilePage() {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/levels')
  }

  return (
    <div className="profile-page">
      {/* Top Header Bar */}
      <div className="profile-header">
        <button type="button" className="back-button" onClick={handleBackClick}>
          <span className="back-icon">★</span>
        </button>
        
        <div className="header-user-info">
          <h2 className="user-name">Sans Undertale</h2>
          <p className="user-role">Student profile</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="profile-main">
        {/* Profile Title Banner */}
        <div className="profile-title-banner">
          <h1 className="profile-title">PROFILE</h1>
          <p className="profile-subtitle">Student login</p>
        </div>

        {/* Student Information Box */}
        <div className="student-info-box">
          <div className="student-image-container">
            <div className="student-image-placeholder">
              {/* Placeholder for student image (purple-blue cat figurine) */}
            </div>
          </div>
          <div className="student-details">
            <h2 className="student-name">Name Surname</h2>
            <ul className="student-info-list">
              <li>1st year IT major student</li>
              <li>2 months of studying python</li>
              <li>Struggles with code consistency</li>
            </ul>
          </div>
        </div>

        {/* Biography Section */}
        <div className="biography-section">
          <div className="biography-content">
            <p className="biography-paragraph">
              NS is a first-year IT student who has just started learning Python. Curious about how software actually works, NS spends a lot of time experimenting with small scripts and debugging simple programs. Right now they are focused on understanding variables, conditions, loops, and basic problem solving. NS goal is to build a solid foundation in programming to move on to web development and more complex projects later.
            </p>
            <p className="biography-paragraph">
              NS is especially interested in how Python can be used for automation and data processing, and is beginning to read about libraries like math and random, with an eye toward eventually using more advanced tools. At the moment, their main focus is writing clear, readable code and learning how to break larger problems into smaller, logical steps. Over time, Alex wants to build enough confidence in Python to contribute to team projects and understand the foundations needed for future work in areas like web development or software engineering.
            </p>
          </div>

          {/* Game Card */}
          <div className="game-card">
            <h3 className="game-card-title">Product Info</h3>
            <div className="game-screen-container">
              <div className="game-screen-placeholder">
                {/* Placeholder for retro game screen */}
              </div>
            </div>
            <div className="game-card-info">
              <p className="game-level">Level 1</p>
              <p className="game-description">Journey begins</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProfilePage

