import React from 'react'
import { useNavigate } from 'react-router-dom'
import Achievement from '../components/Achievement'
import '../styles/AchievementsPage.css'

function AchievementsPage() {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/levels')
  }

  const achievements = [
    {
      title: "Great success!",
      description: "10% of users reached this milestone."
    },
    {
      title: "Great success!",
      description: "10% of users reached this milestone."
    },
    {
      title: "Great success!",
      description: "10% of users reached this milestone."
    }
  ]

  return (
    <div className="achievements-page">
      {/* Top Navigation Bar */}
      <div className="achievements-header">
        <button className="back-button" onClick={handleBackClick}>
          <span className="back-icon">★</span>
        </button>
        <div className="header-user-info">
          <h2 className="user-name">Sans Undertale</h2>
          <p className="user-role">Student profile</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="achievements-main">
        <div className="achievements-titles">
          <h1 className="achievements-main-title">Achievements</h1>
          <p className="achievements-subtitle">Your biggest success!</p>
        </div>

        <div className="achievements-container">
          {achievements.map((achievement, index) => (
            <Achievement
              key={index}
              title={achievement.title}
              description={achievement.description}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default AchievementsPage

