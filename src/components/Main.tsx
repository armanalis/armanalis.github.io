import React from "react";
import Icon from './Icon';
import '../assets/styles/Main.scss';
import ProfileImage from '../assets/images/profile.webp';

function Main() {
  return (
    <section className="hero reveal" id="home">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">
            MSc in Data Science &amp; Engineering @ Politecnico di Torino
          </p>
          <h1 className="hero-brand">Ali Arman Dai</h1>
          <p className="hero-role">Data Science &amp; Engineering</p>
          <p className="hero-lede">
            Building software that solves real problems — with AI, machine learning, LLM and RAG applications.
          </p>
          <div className="hero-actions">
            <div className="btn-split">
              <a className="btn-primary" href={process.env.PUBLIC_URL + '/Resume.pdf'} target="_blank" rel="noreferrer">
                <Icon name="description" small />
                View CV
              </a>
              <a
                className="btn-primary"
                href={process.env.PUBLIC_URL + '/Resume.pdf'}
                download="Ali_Arman_Dai_CV.pdf"
                aria-label="Download CV (PDF)"
                title="Download CV (PDF)"
              >
                <Icon name="download" small />
              </a>
            </div>
            <a className="btn-ghost" href="https://github.com/armanalis" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon name="github" small />
              GitHub
            </a>
            <a className="btn-ghost" href="https://www.linkedin.com/in/ali-arman-dai/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" small />
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
