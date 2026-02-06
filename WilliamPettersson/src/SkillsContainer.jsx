import './SkillsContainer.css'

function SkillsContainer() {
  const skills = [
    // Använd SVG-filer från src/assets mappen (ex: react.svg)
    {img: "java.svg", alt: "Java-ikon", name: 'Java'},
    {img: "python.svg", alt: "Python-ikon", name: 'Python'},
    {img:"csharp.svg", alt: "C#-ikon", name: 'C#'},
    
    { img: "javascript.svg", alt: "JavaScript-ikon", name: 'JavaScript' },
   
    { img: "git.svg", alt: "Git-ikon", name: 'Git' }, 
   { img: "react.svg", alt: "React-ikon", name: 'React'}, 
    {img:"matlab.svg", alt: "Matlab-ikon", name: 'Matlab'},
    
    {img:"kotlin.svg", alt: "Kotlin-ikon", name: 'Kotlin'},
    {img: "postgresql.svg", alt: "PostgreSQL-ikon", name: 'PostgreSQL'},
     { img: "html.svg", alt: "HTML-ikon", name: 'HTML' },
    { img: "css.svg", alt: "CSS-ikon", name: 'CSS' },
  ]

  return (
    <div className="skills-container">
      <h2>Mina Kunskaper</h2>
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
                      src={new URL(`./assets/${skill.img}`, import.meta.url).href}
                      alt={skill.alt}
                      className="skill-icon"
                    />
                  </div>
                )}
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default SkillsContainer
