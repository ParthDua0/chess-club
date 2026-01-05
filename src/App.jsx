import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginSignup from './pages/LoginSignup.jsx'
import GuestDashboard from './pages/GuestDashboard.jsx'
import About from './pages/About.jsx'
import Events from './pages/Events.jsx'
import LeaderboardPage from './pages/Leaderboard.jsx'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="*" element={<LoginSignup />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/guest" element={<GuestDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App