import './styles.scss'

import Coding from '../../assets/images/Coding.png'
import GithubIcon from '../../assets/images/github-icon.svg'
import instagramIcon from '../../assets/images/instagram-icon.svg'
import linkedinIcon from '../../assets/images/linkedin-icon.svg'

export function Sobre () {
  return (
  <>
    <main className="content">
      <div className="conteudo">
        <span>Olá, eu sou</span>
        <h2>Nikolas Santana</h2>
        <span id="final">Full-Stack Developer</span>

        <div className="icon"> 
          <a href="https://github.com/Nikolas-as"><img src={GithubIcon} alt="github" /> </a>
          <a href="https://www.instagram.com/nikolas.dev/"><img src={instagramIcon} alt="instagram" /></a>
          <a href="https://www.linkedin.com/in/nikolas-santana-0a00091a7/"> <img src={linkedinIcon} alt="linkedin"/></a>  
        </div>
        <div className="image">
          <img src={ Coding } alt="programando" />
        </div>
      </div>
    </main>
  </>
  );
}