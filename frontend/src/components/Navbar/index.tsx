import {ReactComponent as GithubIcon} from '../../assets/img/github.svg'
import './styles.css'
function Navbar() {
    return (
        <header>
          <nav className="container">
            <div className="aflmovie-nav-content">
              <h1>AFL Movie</h1>
              <a href="https://github.com/adrianolucati">
                <div className="aflmovie-contact-container">
                  <GithubIcon />
                  <p className="aflmovie-contact-link">/adrianolucati</p>
                </div>
              </a>
            </div>
          </nav>
        </header>
    );
}

export default Navbar