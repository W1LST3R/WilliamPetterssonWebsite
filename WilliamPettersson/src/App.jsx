import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import './Menu.css'
import SplashPage from './SplashPage'
import PersonalContainer from './PersonalContainer'
import InterestsPage from './InterestsPage'
import SkillsPage from './skills/SkillsPage'
import ProjectsPage from './projects/ProjectsPage'
import ContactPage from './ContactPage'
import githubIcon from './assets/github.svg'
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  // Denna useEffect körs EN GÅNG när appen startar
  useEffect(() => {
    if (location.pathname !== '/') {
      navigate('/') // Tvingar användaren till startsidan vid refresh
    }
  }, []) // Tom array betyder att den bara körs vid mount

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashPage onComplete={handleSplashComplete} />
  }

  return (
    <>
      <Routes>
        <Route path="/" element={
          <div>
            <img 
              src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnZzejg2NDM5mWJpa3M0d3R4NGRmaTNlbm90YXczbjI2bnEyc3d1eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6bS8CDTfXBtuBpLZYm/giphy.gif" 
              alt="Hero GIF" 
              className="hero-gif"  
            />  
            <nav className="Menu">
              <Link to="/" className="back-button">HEM</Link>
              <div className="nav-links">
                  <Link to="/interests" className="menu-link">Intressen</Link>
                  <Link to="/skills" className="menu-link">Kunskaper</Link>
                  <Link to="/projects" className="menu-link">Projekt</Link>
                  <Link to="/contact" className="menu-link">Kontakta mig</Link>
                  <a href="https://github.com/W1LST3R" target="_blank" rel="noopener noreferrer" className="social-link">
                    <img src={githubIcon} alt="GitHub" className="social-iconlink" />
                  </a>
              </div>
            </nav>
            <div className="app-container"> 
              <PersonalContainer />
            </div>
          </div>
        } />
        <Route path="/interests" element={<InterestsPage />} />
        <Route path="/skills" element={<SkillsPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App