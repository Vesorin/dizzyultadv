import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <img src="/images/Header.Png" alt="Dizzy character" className="character-left" />
          </div>
          <div className="header-center">
            <h1 className="main-title">THE DIZZY FANSITE</h1>
            <p className="subtitle">RELIVE THE CLASSIC. DISCOVER THE LEGACY.</p>
          </div>
          <div className="header-right">
            <img src="/images/Header.Png" alt="Daisy character" className="character-right" />
          </div>
        </div>
      </header>

      {/* Separator */}
      <div className="separator"></div>

      {/* Main Content Section */}
      <main className="main-content">
        <div className="welcome-container">
          <h2 className="welcome-title">WELCOME</h2>
          <p className="welcome-subtitle">Please log into your student account!</p>
          <div className="login-form">
            <input 
              type="email" 
              className="email-input" 
              defaultValue="tuke.fei.sk@gmail.com"
            />
            <button className="submit-button">Submit</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

