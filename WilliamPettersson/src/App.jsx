import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import SplashPage from './SplashPage'
import InfoContainer from './InfoContainer'
import SkillsContainer from './SkillsContainer'
import ContactContainer from './ContactContainer'
import PersonalContainer from './PersonalContainer'
import InterestsPage from './InterestsPage'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashPage onComplete={handleSplashComplete} />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="app-container">
            <div className="Site-Title">
              <h1>Hej mitt namn är William Pettersson</h1>
            </div>
            <InfoContainer />
            <SkillsContainer />
            <ContactContainer />
            <PersonalContainer />
          </div>
        } />
        <Route path="/interests" element={<InterestsPage />} />
      </Routes>
    </Router>
  )
}

export default App
