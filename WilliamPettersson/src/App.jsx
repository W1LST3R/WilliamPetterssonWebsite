import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import './App.css'
import './Menu.css'
import SplashPage from './SplashPage'
import InfoContainer from './InfoContainer'
import ContactContainer from './ContactContainer'
import PersonalContainer from './PersonalContainer'
import InterestsPage from './InterestsPage'
import SkillsPage from './skills/SkillsPage'
import ProjectsPage from './projects/ProjectsPage'

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
              </div>
            </nav>
            <div className="app-container"> 
              <div className="Site-Title">
                <h1>Hej mitt namn är William Pettersson</h1>
              </div>
              <InfoContainer />
              <ContactContainer />
              <PersonalContainer />
            </div>
          </div>
        } />
        <Route path="/interests" element={<InterestsPage />} />
        <Route path="/skills" element={<SkillsPage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
      </Routes>
    </>
  )
}

export default App