import { useState, useEffect } from 'react'
import './SplashPage.css'

function SplashPage({ onComplete }) {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isAnimating) {
      const redirectTimer = setTimeout(() => {
        onComplete()
      }, 1500)
      return () => clearTimeout(redirectTimer)
    }
  }, [isAnimating, onComplete])

  return (
    <div className="splash-container">
     <div className={`splash-text ${isAnimating ? 'grow' : ''}`}>
       Välkommen till min portfolio
     </div>
    </div>
  )
}

export default SplashPage
