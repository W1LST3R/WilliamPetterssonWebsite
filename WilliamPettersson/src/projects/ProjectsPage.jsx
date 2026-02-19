import './ProjectsPage.css'
import { Link } from 'react-router-dom'

function ProjectsPage() {


const projects = [
  { 
    name: 'Examensarbete - Undersökning av LIC generaliserings algoritm', 
    description: 'Undersökning av en LIC algoritms generaliseringsförmåga i svenska bergsförhållande och hustak.', 
    img: 'examensarbete.png', // Lägg dina projektbilder i src/assets
    technologies: ['html.svg', 'css.svg'] // Lista på de ikoner som ska visas längst ner
  },
  { 
    name: 'Space Party', 
    description: 'Online multiplayer brädspel för Android.', 
    img: 'spaceparty.png', // Lägg dina projektbilder i src/assets
    technologies: ['kotlin.svg', 'firebase.svg', 'androidstudio.svg'] // Lista på de ikoner som ska visas längst ner
  },
  { 
    name: 'Frogos Adventure', 
    description: 'Platformspel skapat i Unity.', 
    img: 'frogosadventure.png', // Lägg dina projektbilder i src/assets
    technologies: ['csharp.svg', 'unity.svg',] // Lista på de ikoner som ska visas längst ner
  },
  // Lägg till fler projekt här...
]

return (
  <div className="skills-container">

    <div className="projects-container">      
     <nav className="Menu">
          <Link to="/" className="back-button">HEM</Link>
            <div className="nav-links">
              <Link to="/interests" className="menu-link">Intressen</Link>
              <Link to="/skills" className="menu-link">Kunskaper</Link>
              <Link to="/projects" className="menu-link">Projekt</Link>
              {/* Lägg till fler länkar här för att matcha bilden */}
          </div>
      </nav>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* 1. Bilden längst upp */}
            <img 
              src={new URL(`../assets/${project.img}`, import.meta.url).href} 
              alt={project.name} 
              className="project-image" 
            />

            <div className="project-content">
              {/* 2. Projektets namn */}
              <h2 className="project-title">{project.name}</h2>

              {/* 3. Beskrivning */}
              <p className="project-text">{project.description}</p>

              {/* 4. Kunskaper (Ikoner längst ner) */}
              <div className="project-tech-stack">
                {project.technologies.map((tech, i) => (
                  <div key={i} className="tech-tag">
                    <img 
                      src={new URL(`../assets/${tech}`, import.meta.url).href} 
                      alt="tech icon" 
                    />
                    <span className='tech-text'>
                      {tech.split('.')[0].toUpperCase() ==='CSHARP' ? 'C#' : tech.split('.')[0].toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}

export default ProjectsPage