import { useState } from 'react'
import './App.css'
import SplashPage from './SplashPage'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashPage onComplete={handleSplashComplete} />
  }

  return (
    <div className="app-container">
      <h1>Welcome</h1>
      <p>Your content goes here</p>
    </div>
  )
}

export default App
