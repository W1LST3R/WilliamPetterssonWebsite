import './ContactContainer.css'
import linkedinIcon from './assets/linkedin.svg'
import githubIcon from './assets/github.svg'

function ContactContainer() {
    return (
        <div className="contact-container">
            <h2>Kontaktinformation</h2>
            <p>E-post: williampet02@gmail.com</p>
            <p>Telefon: 072-0011051</p>
           
<p>
  <a
    href="https://www.linkedin.com/in/william-pettersson-a27570270/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
  src={linkedinIcon}
  alt="LinkedIn"
  className="social-icon"
/>

  </a>
  <a href="https://github.com/W1LST3R" target="_blank" rel="noopener noreferrer">
  <img
  src={githubIcon}
  alt="GitHub"
  className="social-icon"
/>
</a>
</p>             
            
        </div>
        
    )
}

export default ContactContainer