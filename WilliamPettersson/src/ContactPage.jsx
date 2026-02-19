import './ContactPage.css';
import { Link } from 'react-router-dom';
import linkedinIcon from './assets/linkedin.svg'
import profilePicture from './assets/profilepic.jfif'
import { useState } from 'react';
import githubIcon from './assets/github.svg'

function ContactPage() {

    const email = "williampet02@gmail.com";
    const phone = "072-0011051";
    const [activeCopy, setActiveCopy] = useState(""); // Tom sträng som start
    const copyToClipboard = async (textToCopy, id) => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            setActiveCopy(id); // Aktivera kopierad status för rätt ID
            
            // Återställ knappen efter 2 sekunder
            setTimeout(() => setActiveCopy(""), 2000);
        } catch (err) {
            console.error("Kunde inte kopiera text: ", err);
        }
    };
    
    return (


        <div className="contact-page">
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
              </div>
            </nav>
            <div className="contact-container">
                <div className="profile-sidebar">
                    <img className='profile-icon'
                        src={profilePicture}
                        alt="Profile Picture"
                    />
                    <div className="contact-link">
                        <a 
                            href="https://www.linkedin.com/in/william-pettersson-a27570270/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img className='contact-icon'
                                src={linkedinIcon}
                                alt="LinkedIn"
                            />
                        </a>
                    </div>
                </div>
                <div className="contact-text">
                    <h1>William Pettersson</h1>
                    <h3 className='contact-occupation'>Systemutvecklare</h3>
                    <p>
                        Jag är en nyexaminerad systemutvecklare med erfarenhet inom flera programmeringsspråk och teknologier. 
                        <br /><br />
                        Jag söker ett arbete där jag kan bidra till tekniska lösningar med verklig påverkan, samtidigt som jag fortsätter att växa professionellt inom IT-området.
                    </p>
                    <div className="copy-container">
                    <button onClick={() => copyToClipboard(email, "email")} className="copy-button">
                        {activeCopy === "email" ? "Kopierat!" : email}
                    </button>

                    <button onClick={() => copyToClipboard(phone, "phone")} className="copy-button">
                        {activeCopy === "phone" ? "Kopierat!" : phone}
                    </button>
        </div>
                </div>
               
            </div>
        </div>
    )}


   
export default ContactPage;