import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import LevelsPage from './pages/LevelsPage'
import AchievementsPage from './pages/AchievementsPage'
import './App.css'

function App() {
  return (
    <BrowserRouter basename="/dizzyultadv">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/levels" element={<LevelsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

