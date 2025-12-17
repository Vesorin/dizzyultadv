import React from 'react'
import '../styles/Header.css'

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <img src="/dizzyultadv/images/Header.Png" alt="Dizzy character" className="character-left" />
          </div>
          <div className="header-center">
            <h1 className="main-title">THE DIZZY FANSITE</h1>
            <p className="subtitle">RELIVE THE CLASSIC. DISCOVER THE LEGACY.</p>
          </div>
          <div className="header-right">
            <img src="/dizzyultadv/images/Header.Png" alt="Daisy character" className="character-right" />
          </div>
        </div>
      </header>
      <div className="separator"></div>
    </>
  )
}

export default Header

