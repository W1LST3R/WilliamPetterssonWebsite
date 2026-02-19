import { Link } from 'react-router-dom'
import './PersonalContainer.css'

function PersonalContainer() {
  return (
    <div className="personal-container">
      <Link to="/interests" className="personal-button">Mina intressen</Link>
      <Link to="/skills" className='personal-button'>Mina kunskaper</Link>
      <Link to="/projects" className='personal-button'>Mina projekt</Link>
      <Link to="/contact" className='personal-button'>Kontakta mig</Link>
      <button className='personal-button'>Gaming hörna</button>
    </div>
  )
}

export default PersonalContainer