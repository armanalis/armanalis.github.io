import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-brand">Ali Arman Dai</p>
        <div className="footer-links">
          <a href="https://github.com/armanalis" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon/></a>
          <a href="https://www.linkedin.com/in/ali-arman-dai/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon/></a>
        </div>
        <p className="footer-note">Designed &amp; built by Ali Arman Dai</p>
      </div>
    </footer>
  );
}

export default Footer;
