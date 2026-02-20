import { useState } from 'react'
import { Link } from 'react-router-dom'
import './InterestsPage.css'
import './Menu.css'
import githubIcon from './assets/github.svg'
import cookingImage from './assets/cooking.jfif'
import huntingImage from './assets/hunting.jfif'
import fishingImage from './assets/fishing.jfif'

function InterestsPage() {
  const interests = [
    { name: 'Matlagning', path: '/interests/cooking', image: cookingImage, description: 'Jag gillar att laga mat och testa nya recept.' },
    { name: 'Klättring', path: '/interests/climbing', image: "./assets/climbing.mp4", description: 'Träning är en viktig del av min vardag, därför klättrar jag regelbundet inomhus' },
    { name: 'Jakt', path: '/interests/hunting', image: huntingImage, description: 'Under hösten jagar jag så ofta jag kan på Gotland. Då jagar jag med hundar efter rådjur. Men det händer också att jag smygjagar också.' },
    { name: 'Skidåkning', path: '/interests/skiing', image: "./assets/skiing.mp4", description: 'Under vintern försöker jag alltid boka in en skidsemester.' },
    { name: 'Fiske', path: '/interests/fishing', image: fishingImage, description: 'Fiske är något jag gillar att göra på lediga dagar, då man får komma ut i naturen och ibland fånga en fisk.' }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % interests.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + interests.length) % interests.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const current = interests[currentSlide]

  return (
    <div className="interests-container">
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
                  {/* Lägg till fler länkar här för att matcha bilden */}
              </div>
            </nav>
      <header className="interests-header">
        <h1 className="interests-title">Mina Intressen</h1>
      </header>

      <div className="slideshow-container">
        <div className="slideshow-media-wrapper">
          {current.image.endsWith('.mp4') ? (
            <video className="slideshow-media" controls autoPlay muted loop>
              <source src={new URL(`./assets/${current.image.split('/').pop()}`, import.meta.url).href} type="video/mp4" />
              Din webbläsare stöder inte video.
            </video>
          ) : (
            <img className="slideshow-media" src={current.image} alt={current.name} />
          )}
        </div>

        <div className="slideshow-content">
          <h2 className="slideshow-title">{current.name}</h2>
          <p className="slideshow-description">{current.description}</p>
        </div>

        <button className="slideshow-button prev" onClick={prevSlide}>❮</button>
        <button className="slideshow-button next" onClick={nextSlide}>❯</button>

        <div className="slideshow-dots">
          {interests.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Gå till slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InterestsPage
