import './SkillsContainer.css'

function FrontendContainer() {
  const skills = [
    // Använd SVG-filer från src/assets mappen (ex: react.svg)
    { img: "react.svg", alt: "React-ikon", name: 'React', description: 'JavaScript UI Library' }, 
     { img: "html.svg", alt: "HTML-ikon", name: 'HTML' ,description:'Markup Language for Web Pages'},
    { img: "css.svg", alt: "CSS-ikon", name: 'CSS' ,description:'Stylesheet Language for Web Design'},


//PostgreSQL – Relational Database Management System
//Git – Version Control System
//Matlab – Numerical Computing Environment
  ]
//https://tenor.com/bRPBh.gif

  return (
    <div className="skills-container">
      <h2>Frontend</h2>
      <div className="skills-grid">
        {skills.length === 0 ? (
          <p className="empty-message">Lägg till dina kunskaper här</p>
        ) : (
          skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-media">
                {skill.img && (
                  <div className="icon-wrap">
                    <img
                      src={new URL(`../assets/${skill.img}`, import.meta.url).href}
                      alt={skill.alt}
                      className="skill-icon"
                    />
                  </div>
                )}
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-description">
                  <p className='skill-description-text'>{skill.description}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default FrontendContainer
