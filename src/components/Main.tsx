import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Main.scss';
import ProfileImage from '../assets/images/profile.png';

function Main() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">
            MSc in Data Science and Engineering @ Politecnico di Torino
          </p>
          <h1 className="hero-brand">Ali Arman Dai</h1>
          <p className="hero-role">Data Science &amp; Engineering</p>
          <p className="hero-lede">
            Building software that solves real problems — with automation, AI, and systems that stay efficient under pressure.
          </p>
          <div className="hero-actions">
            <a
              className="btn-primary"
              href={process.env.PUBLIC_URL + '/Resume.pdf'}
              target="_blank"
              rel="noreferrer"
              download="Ali_Arman_Dai_Resume.pdf"
            >
              <DownloadIcon fontSize="small" />
              Download Resume
            </a>
            <a className="btn-ghost" href="https://github.com/armanalis" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon fontSize="small" />
              GitHub
            </a>
            <a className="btn-ghost" href="https://www.linkedin.com/in/ali-arman-dai/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon fontSize="small" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <img src={ProfileImage} alt="Ali Arman Dai" />
        </div>
      </div>
    </section>
  );
}

export default Main;
