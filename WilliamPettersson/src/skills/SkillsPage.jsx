import { Link } from "react-router-dom";
import './SkillsPage.css';
import '../Menu.css';
import FrontendContainer from "./FrontendContainer";
import DatabaseContainer from "./DatabaseContainer";
import OtherContainer from "./OtherContainer";
import BackendContainer from "./BackendContainer";
import githubIcon from '../assets/github.svg'

function SkillsPage(){
    return(
        <div className="skills-page">
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
            <BackendContainer/>
            <FrontendContainer/>
            <DatabaseContainer/>
            <OtherContainer/>
        </div>
        
    )
}

export default SkillsPage


