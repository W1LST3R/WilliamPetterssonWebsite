import './SkillsContainer.css'

function DatabaseContainer() {
  const skills = [
    // Använd SVG-filer från src/assets mappen (ex: react.svg)
    {img: "postgresql.svg", alt: "PostgreSQL-ikon", name: 'PostgreSQL',description: 'Relational Database Management System'},
    {img: "firebase.svg", alt: "Firebase-ikon", name: 'Firebase', description: 'Googles backend platform for web and mobile apps'},

//Git – Version Control System
//Matlab – Numerical Computing Environment
  ]
//https://tenor.com/bRPBh.gif
//https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2QzZGdqaGFzcmVwbWJiMnFja3N5cHVpeDNwaGlleWppeTJlZ3NyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9zExs2Q2h1EHfE4P6G/giphy.gif
  return (
    <div className="skills-container">
      <h2>Database</h2>
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

export default DatabaseContainer
