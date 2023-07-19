import './Header.css';
import github_icon from '../assets/github-icon.svg';
import linkedin_icon from '../assets/linkedin-icon.svg'

function Header() {

    return (
        <div className="Header">
            <h1>Text Analyser</h1>
            <div className="social">
                <a target="_blank" href="https://github.com/Dmaneral"><img src={github_icon} alt="GitHub Icon" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/luka-bidzinashvili/"><img src={linkedin_icon} alt="LinkedIn Icon" /></a>
            </div>
        </div>
    );
}

export default Header;