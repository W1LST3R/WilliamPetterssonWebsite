import { useState } from 'react'
import { Link } from 'react-router-dom'
import './InterestsPage.css'

function InterestsPage() {
  const interests = [
    { name: 'Matlagning', path: '/interests/cooking', image: '/src/assets/cooking.jfif', description: 'Jag gillar att laga mat och testa nya recept.' },
    { name: 'Klättring', path: '/interests/climbing', image: '/src/assets/climbing.mp4', description: 'Träning är en viktig del av min vardag, därför klättrar jag regelbundet inomhus' },
    { name: 'Jakt', path: '/interests/hunting', image: '/src/assets/hunting.jfif', description: 'Under hösten jagar jag så ofta jag kan på Gotland. Då jagar jag med hundar efter rådjur. Men det händer också att jag smygjagar också.' },
    { name: 'Skidåkning', path: '/interests/skiing', image: '/src/assets/skiing.mp4', description: 'Under vintern försöker jag alltid boka in en skidsemester.' },
    { name: 'Fiske', path: '/interests/fishing', image: '/src/assets/fishing.jfif', description: 'Fiske är något jag gillar att göra på lediga dagar, då man får komma ut i naturen och ibland fånga en fisk.' }
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
      <header className="interests-header">
        <Link to="/" className="back-link">← Tillbaka</Link>
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
